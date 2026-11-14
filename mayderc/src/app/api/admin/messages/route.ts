import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth';
import { listMessages } from '@/lib/messages';

export async function GET(request: NextRequest) {
  const authed = await verifySessionToken(
    request.cookies.get(SESSION_COOKIE)?.value
  );
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const messages = await listMessages();
    return NextResponse.json({ messages });
  } catch (error) {
    console.error('Admin messages error:', error);
    return NextResponse.json(
      { error: 'Failed to load messages' },
      { status: 500 }
    );
  }
}
