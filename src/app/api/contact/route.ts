import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { isSameOrigin } from '@/lib/origin';
import { getClientIp, rateLimit } from '@/lib/rate-limit';

const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const LIMITS = {
  name: 120,
  email: 200,
  service: 60,
  message: 5000,
};

interface ContactFormData {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string; // honeypot
}

function hashedIp(ip: string) {
  return ip.replace(/[^0-9a-fA-F.:]/g, '') || 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    if (!isSameOrigin(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(request);
    const limit = rateLimit(`contact:${ip}`, MAX_REQUESTS, WINDOW_MS);

    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many requests' },
        {
          status: 429,
          headers: { 'Retry-After': String(limit.retryAfterSeconds) },
        }
      );
    }

    const body: ContactFormData = await request.json();

    // Honeypot: real users never fill this hidden field.
    if (body.company) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const service = (body.service || '').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      service.length > LIMITS.service ||
      message.length > LIMITS.message
    ) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();
    const collection = db.collection('contacts');

    const result = await collection.insertOne({
      name,
      email,
      service,
      message,
      createdAt: new Date(),
      status: 'new',
      ipHash: hashedIp(ip),
      userAgent: request.headers.get('user-agent') || 'unknown',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully',
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process message. Please try again later.' },
      { status: 500 }
    );
  }
}
