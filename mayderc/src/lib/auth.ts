/**
 * Admin auth using Web Crypto so it works in both the Edge middleware and
 * Node route handlers. Single password + signed, expiring session cookie.
 */

const encoder = new TextEncoder();

export const SESSION_COOKIE = 'admin_session';
export const SESSION_TTL_MS = 8 * 60 * 60 * 1000; // 8 hours
export const SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;

function getSecret() {
  return process.env.ADMIN_SECRET || 'insecure-dev-secret-change-me';
}

export function isAuthConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

function toHex(bytes: Uint8Array) {
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function sha256Hex(value: string) {
  const digest = await crypto.subtle.digest('SHA-256', encoder.encode(value));
  return toHex(new Uint8Array(digest));
}

async function hmacHex(value: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));
  return toHex(new Uint8Array(signature));
}

function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function verifyPassword(input: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD || '';
  if (!expected) return false;
  const [a, b] = await Promise.all([sha256Hex(input), sha256Hex(expected)]);
  return constantTimeEqual(a, b);
}

export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_TTL_MS;
  const signature = await hmacHex(String(expires));
  return `${expires}.${signature}`;
}

export async function verifySessionToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;

  const [expiresRaw, signature] = token.split('.');
  if (!expiresRaw || !signature) return false;

  const expires = Number(expiresRaw);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;

  const expected = await hmacHex(expiresRaw);
  return constantTimeEqual(signature, expected);
}
