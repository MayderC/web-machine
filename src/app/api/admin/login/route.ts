import { NextRequest, NextResponse } from 'next/server';
import { isSameOrigin } from '@/lib/origin';
import {
  clearFailures,
  getClientIp,
  isBlocked,
  rateLimit,
  registerFailure,
} from '@/lib/rate-limit';
import {
  createSessionToken,
  isAuthConfigured,
  SESSION_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  verifyPassword,
} from '@/lib/auth';

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_FAILURES = 5;
const MAX_ATTEMPTS = 10;

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  if (!isAuthConfigured()) {
    return NextResponse.json(
      { error: 'Admin auth is not configured' },
      { status: 500 }
    );
  }

  const ip = getClientIp(request);
  const key = `login:${ip}`;

  const blocked = isBlocked(key, MAX_FAILURES);
  if (blocked.blocked) {
    return NextResponse.json(
      { error: 'Too many failed attempts', retryAfterSeconds: blocked.retryAfterSeconds },
      {
        status: 429,
        headers: { 'Retry-After': String(blocked.retryAfterSeconds) },
      }
    );
  }

  const attempts = rateLimit(key, MAX_ATTEMPTS, WINDOW_MS);
  if (!attempts.ok) {
    return NextResponse.json(
      { error: 'Too many attempts', retryAfterSeconds: attempts.retryAfterSeconds },
      {
        status: 429,
        headers: { 'Retry-After': String(attempts.retryAfterSeconds) },
      }
    );
  }

  let password = '';
  try {
    const body = await request.json();
    password = String(body?.password ?? '');
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const valid = await verifyPassword(password);
  if (!valid) {
    const failures = registerFailure(key, WINDOW_MS);
    return NextResponse.json(
      {
        error: 'Invalid credentials',
        remaining: Math.max(0, MAX_FAILURES - failures),
      },
      { status: 401 }
    );
  }

  clearFailures(key);

  const token = await createSessionToken();
  const response = NextResponse.json({ success: true });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  });

  return response;
}
