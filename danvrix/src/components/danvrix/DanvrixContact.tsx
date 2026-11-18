'use client';

import { FormEvent, useState } from 'react';
import { Reveal } from './Reveal';

const needs = ['Sitio web', 'Aplicación web', 'Asistente de IA', 'No estoy seguro'];

const bullets = [
  'Respondo en 24–48 horas',
  'Reviso si tiene sentido para tu negocio',
  'Sin jerga innecesaria',
];

const fieldClass =
  'w-full rounded-lg border border-dv-border bg-dv-surface px-3.5 py-2.5 text-[14px] text-dv-ink placeholder:text-dv-muted transition-colors focus:border-dv-accent-line focus:outline-none focus:ring-2 focus:ring-dv-accent-line/25';

export function DanvrixContact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    website: '',
    need: '',
    message: '',
    company: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const update = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!form.need) return;

    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          service: form.need,
          website: form.website,
          message: form.message,
          company: form.company,
          source: 'danvrix',
        }),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        website: '',
        need: '',
        message: '',
        company: '',
      });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="border-b border-dv-border bg-dv-surface">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="dv-eyebrow">Contacto</p>
            <h2 className="mt-4 text-[28px] font-medium leading-[1.15] tracking-[-0.02em] text-dv-ink sm:text-[32px]">
              Qué necesita tu negocio
            </h2>
            <p className="mt-4 text-[15px] leading-[1.7] text-dv-ink-2">
              Reviso tu caso y te digo qué solución tiene sentido: un sitio, una aplicación
              o un asistente de IA. Sin compromiso.
            </p>

            <ul className="mt-6 space-y-2.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[14px] text-dv-ink-2">
                  <span className="mt-[7px] h-[5px] w-[5px] shrink-0 bg-dv-accent-line" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg bg-dv-raised p-4">
              <p className="text-[11px] text-dv-muted">Email directo</p>
              <a
                className="mt-1 inline-flex items-center gap-1.5 text-[14px] font-medium text-dv-accent-ink transition-colors hover:text-dv-ink"
                href="mailto:hola@danvrix.dev"
              >
                hola@danvrix.dev
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={60}>
            <form
              onSubmit={onSubmit}
              aria-busy={status === 'sending'}
              className="rounded-2xl border border-dv-border bg-dv-bg p-6 md:p-8"
            >
              <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="danvrix-company">No completar</label>
                <input
                  id="danvrix-company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={(event) => update('company', event.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-dv-ink" htmlFor="danvrix-name">
                    Tu nombre *
                  </label>
                  <input
                    id="danvrix-name"
                    className={fieldClass}
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => update('name', event.target.value)}
                    placeholder="Carlos Mendoza"
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-medium text-dv-ink" htmlFor="danvrix-email">
                    Email *
                  </label>
                  <input
                    id="danvrix-email"
                    className={fieldClass}
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => update('email', event.target.value)}
                    placeholder="carlos@email.com"
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-dv-ink" htmlFor="danvrix-website">
                  Tu web o negocio
                </label>
                <input
                  id="danvrix-website"
                  className={fieldClass}
                  type="text"
                  value={form.website}
                  onChange={(event) => update('website', event.target.value)}
                  placeholder="tunegocio.com o el nombre de tu negocio"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <span className="text-[12px] font-medium text-dv-ink">Qué te interesa *</span>
                <div className="grid grid-cols-2 gap-2">
                  {needs.map((need) => (
                    <button
                      key={need}
                      type="button"
                      className={`rounded-lg border px-3 py-2 text-left text-[13px] font-medium transition-colors ${
                        form.need === need
                          ? 'border-dv-accent bg-dv-accent text-dv-primary'
                          : 'border-dv-border bg-dv-surface text-dv-ink-2 hover:border-dv-ink/30 hover:text-dv-ink'
                      }`}
                      onClick={() => update('need', need)}
                      disabled={status === 'sending'}
                    >
                      {need}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <label className="text-[12px] font-medium text-dv-ink" htmlFor="danvrix-message">
                  Cuéntame un poco más *
                </label>
                <textarea
                  id="danvrix-message"
                  className={`${fieldClass} resize-none`}
                  rows={4}
                  required
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder="Qué hace tu negocio y qué necesitas construir o mejorar"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-[1.6] text-dv-muted">
                  Sin spam. Solo uso tus datos para responder a este mensaje.
                </p>
                <button
                  type="submit"
                  className="dv-btn dv-btn-primary disabled:pointer-events-none disabled:opacity-60"
                  disabled={status === 'sending' || !form.need}
                >
                  {status === 'sending' ? 'Enviando' : 'Enviar mensaje'}
                  <span className="material-symbols-outlined text-[16px]">send</span>
                </button>
              </div>

              <div aria-live="polite">
                {status === 'success' && (
                  <div className="mt-4 rounded-lg border border-dv-border bg-dv-raised p-4 text-[14px] text-dv-ink">
                    <span className="font-medium">Mensaje recibido.</span> Te responderé a la
                    brevedad con una opinión concreta sobre tu caso.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 rounded-lg border border-[#E0B6AA] bg-[#FBEDE7] p-4 text-[14px] text-[#8A2E1D]">
                    No se pudo enviar el mensaje. Intenta de nuevo o escribe a{' '}
                    <a className="font-medium underline" href="mailto:hola@danvrix.dev">
                      hola@danvrix.dev
                    </a>
                    .
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
