'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.replace('/admin');
        router.refresh();
        return;
      }

      const data = await response.json().catch(() => ({}));
      if (response.status === 429) {
        setError(
          `Demasiados intentos. Vuelve a intentar en ${
            data.retryAfterSeconds ?? 60
          } s.`
        );
      } else {
        setError(data.error || 'Credenciales inválidas');
      }
    } catch {
      setError('Error de red. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm bg-retro-card border-2 border-retro-ink retro-shadow-lg p-6 md:p-8 flex flex-col gap-5"
      >
        <div className="flex items-center gap-2 pb-3 border-b-2 border-retro-ink">
          <span className="font-mono text-xs px-2 py-0.5 bg-retro-ink text-retro-bg font-bold tracking-wider">
            [MC]
          </span>
          <span className="font-sans font-bold text-lg text-retro-ink">
            Panel de admin
          </span>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-xs font-bold text-retro-ink" htmlFor="password">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            autoFocus
            autoComplete="current-password"
            className="w-full bg-retro-bg px-3.5 py-2.5 border-2 border-retro-ink font-sans text-sm text-retro-ink focus:outline-none focus:bg-retro-card transition-all rounded-none"
          />
        </div>

        {error && (
          <div className="p-3 bg-retro-orange/20 border-2 border-retro-ink font-sans text-xs font-medium text-retro-ink">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center h-11 px-6 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-yellow text-retro-on-accent retro-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--c-shadow)] transition-all disabled:opacity-60 disabled:pointer-events-none"
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}
