export type MessageStatus = 'new' | 'read' | 'archived';

export const MESSAGE_STATUSES: MessageStatus[] = ['new', 'read', 'archived'];

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  status: MessageStatus;
  createdAt: string;
}
