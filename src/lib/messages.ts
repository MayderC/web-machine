import { ObjectId } from 'mongodb';
import { connectToDatabase } from './mongodb';
import {
  ContactMessage,
  MessageStatus,
} from './message-types';

interface ContactDocument {
  name: string;
  email: string;
  service: string;
  message: string;
  status?: MessageStatus;
  createdAt: Date;
  ipHash?: string;
  userAgent?: string;
}

export async function listMessages(limit = 100): Promise<ContactMessage[]> {
  const { db } = await connectToDatabase();
  const docs = await db
    .collection<ContactDocument>('contacts')
    .find({})
    .sort({ createdAt: -1 })
    .limit(limit)
    .toArray();

  return docs.map((doc) => ({
    id: doc._id.toString(),
    name: doc.name,
    email: doc.email,
    service: doc.service,
    message: doc.message,
    status: doc.status ?? 'new',
    createdAt:
      doc.createdAt instanceof Date
        ? doc.createdAt.toISOString()
        : new Date(doc.createdAt).toISOString(),
  }));
}

export async function updateMessageStatus(
  id: string,
  status: MessageStatus
): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;

  const { db } = await connectToDatabase();
  const result = await db
    .collection<ContactDocument>('contacts')
    .updateOne({ _id: new ObjectId(id) }, { $set: { status } });

  return result.matchedCount > 0;
}
