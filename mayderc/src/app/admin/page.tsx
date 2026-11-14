import { ContactMessage } from '@/lib/message-types';
import { listMessages } from '@/lib/messages';
import { AdminMessages } from './AdminMessages';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  let messages: ContactMessage[] = [];
  let error = '';

  try {
    messages = await listMessages();
  } catch (cause) {
    console.error('Admin page error:', cause);
    error = 'No se pudo conectar con la base de datos.';
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      <AdminMessages initialMessages={messages} loadError={error} />
    </div>
  );
}
