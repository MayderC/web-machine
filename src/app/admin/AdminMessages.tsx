'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ContactMessage, MessageStatus } from '@/lib/message-types';

interface AdminMessagesProps {
  initialMessages: ContactMessage[];
  loadError: string;
}

const FILTERS: { id: 'all' | MessageStatus; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'new', label: 'Nuevos' },
  { id: 'read', label: 'Leídos' },
  { id: 'archived', label: 'Archivados' },
];

const STATUS_STYLES: Record<MessageStatus, string> = {
  new: 'bg-retro-yellow text-retro-on-accent',
  read: 'bg-retro-mint text-retro-on-accent-2',
  archived: 'bg-retro-card text-retro-muted',
};

const STATUS_LABELS: Record<MessageStatus, string> = {
  new: 'NUEVO',
  read: 'LEÍDO',
  archived: 'ARCHIVADO',
};

function formatDate(value: string) {
  return value.slice(0, 16).replace('T', ' ');
}

export function AdminMessages({ initialMessages, loadError }: AdminMessagesProps) {
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState<'all' | MessageStatus>('all');
  const [busyId, setBusyId] = useState<string | null>(null);

  const updateStatus = async (id: string, status: MessageStatus) => {
    setBusyId(id);
    const previous = messages;

    setMessages((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item))
    );

    try {
      const response = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error('Request failed');
    } catch {
      setMessages(previous);
    } finally {
      setBusyId(null);
    }
  };

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  };

  const visible =
    filter === 'all'
      ? messages
      : messages.filter((item) => item.status === filter);

  const newCount = messages.filter((item) => item.status === 'new').length;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-retro-ink">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 bg-retro-ink text-retro-bg font-bold tracking-wider">
            [MC]
          </span>
          <div>
            <h1 className="font-sans font-extrabold text-2xl text-retro-ink tracking-tight">
              Mensajes de contacto
            </h1>
            <span className="font-mono text-xs font-bold text-retro-muted">
              {messages.length} en total · {newCount} sin leer
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => router.refresh()}
            className="h-9 px-3 bg-retro-card border-2 border-retro-ink font-mono text-xs font-bold text-retro-ink hover:bg-retro-bg transition-colors retro-shadow-sm"
          >
            Recargar
          </button>
          <button
            type="button"
            onClick={logout}
            className="h-9 px-3 bg-retro-card border-2 border-retro-ink font-mono text-xs font-bold text-retro-ink hover:bg-retro-orange hover:text-white transition-colors retro-shadow-sm"
          >
            Salir
          </button>
        </div>
      </header>

      {loadError ? (
        <div className="p-4 bg-retro-orange/20 border-2 border-retro-ink font-sans text-sm text-retro-ink">
          {loadError}
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                className={`px-3 py-1.5 border-2 border-retro-ink font-mono text-xs font-bold transition-colors ${
                  filter === item.id
                    ? 'bg-retro-ink text-retro-bg'
                    : 'bg-retro-card text-retro-ink hover:bg-retro-bg'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="font-sans text-sm text-retro-muted py-10 text-center">
              No hay mensajes para este filtro.
            </p>
          ) : (
            <ul className="flex flex-col gap-4">
              {visible.map((item) => (
                <li
                  key={item.id}
                  className="bg-retro-card border-2 border-retro-ink retro-shadow p-5 flex flex-col gap-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                      <span
                        className={`px-2 py-0.5 border border-retro-ink font-bold ${STATUS_STYLES[item.status]}`}
                      >
                        {STATUS_LABELS[item.status]}
                      </span>
                      <span className="font-bold text-retro-ink">{item.name}</span>
                      <span className="text-retro-muted">·</span>
                      <a
                        href={`mailto:${item.email}`}
                        className="font-bold text-retro-ink hover:underline"
                      >
                        {item.email}
                      </a>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-retro-muted">
                      {formatDate(item.createdAt)} UTC
                    </span>
                  </div>

                  <div className="font-mono text-[11px] font-bold text-retro-muted uppercase tracking-wider">
                    {item.service}
                  </div>

                  <p className="font-sans text-sm text-retro-ink whitespace-pre-wrap leading-relaxed">
                    {item.message}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-3 border-t-2 border-retro-ink/20">
                    {item.status !== 'read' && (
                      <button
                        type="button"
                        disabled={busyId === item.id}
                        onClick={() => updateStatus(item.id, 'read')}
                        className="px-3 py-1.5 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-mint text-retro-on-accent-2 hover:translate-x-[1px] hover:translate-y-[1px] transition-all disabled:opacity-60"
                      >
                        Marcar leído
                      </button>
                    )}
                    {item.status !== 'archived' && (
                      <button
                        type="button"
                        disabled={busyId === item.id}
                        onClick={() => updateStatus(item.id, 'archived')}
                        className="px-3 py-1.5 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-card text-retro-ink hover:bg-retro-bg transition-colors disabled:opacity-60"
                      >
                        Archivar
                      </button>
                    )}
                    {item.status === 'archived' && (
                      <button
                        type="button"
                        disabled={busyId === item.id}
                        onClick={() => updateStatus(item.id, 'new')}
                        className="px-3 py-1.5 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-card text-retro-ink hover:bg-retro-bg transition-colors disabled:opacity-60"
                      >
                        Reabrir
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
