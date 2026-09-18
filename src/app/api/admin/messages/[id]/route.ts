import { NextRequest, NextResponse } from 'next/server';
import { SESSION_COOKIE, verifySessionToken } from '@/lib/auth';
import { MESSAGE_STATUSES, MessageStatus } from '@/lib/message-types';
import { updateMessageStatus } from '@/lib/messages';
import { isSameOrigin } from '@/lib/origin';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const authed = await verifySessionToken(
    request.cookies.get(SESSION_COOKIE)?.value
  );
  if (!authed) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await params;

  let status: string = '';
  try {
    const body = await request.json();
    status = String(body?.status ?? '');
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  if (!MESSAGE_STATUSES.includes(status as MessageStatus)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
  }

  const updated = await updateMessageStatus(id, status as MessageStatus);
  if (!updated) {
    return NextResponse.json({ error: 'Message not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
