'use client';

import { FormEvent, useState } from 'react';
import { Reveal } from './Reveal';

const needs = [
  'Sitio web',
  'Aplicación web',
  'Asistente de IA',
  'No estoy seguro',
];

const bullets = [
  'Respondo en 24–48 horas',
  'Reviso si tiene sentido para tu negocio',
  'Sin jerga innecesaria',
];

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
    <section id="contacto" className="border-b border-dv-border bg-white">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-dv-blue" />
              <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-dv-muted">
                CONTACTO
              </span>
            </div>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-dv-navy sm:text-4xl">
              Cuéntame qué necesita tu negocio.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-dv-muted">
              Reviso tu caso y te digo qué solución tiene sentido: un sitio, una aplicación
              o un asistente de IA. Sin compromiso.
            </p>

            <ul className="mt-6 space-y-2.5">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 text-sm text-dv-muted">
                  <span className="h-px w-3 bg-dv-blue" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-dv-border bg-dv-bg p-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-dv-muted">
                Email directo
              </p>
              <a
                className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-dv-blue hover:text-dv-navy"
                href="mailto:hola@danvrix.dev"
              >
                hola@danvrix.dev
                <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <form
              onSubmit={onSubmit}
              aria-busy={status === 'sending'}
              className="rounded-xl border border-dv-border bg-dv-bg p-6 md:p-8"
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
                  <label className="text-xs font-bold text-dv-navy" htmlFor="danvrix-name">
                    Tu nombre *
                  </label>
                  <input
                    id="danvrix-name"
                    className="w-full rounded-md border border-dv-border bg-white px-3.5 py-2.5 text-sm text-dv-navy placeholder:text-dv-muted/70 focus:border-dv-blue focus:outline-none focus:ring-2 focus:ring-dv-blue/20"
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => update('name', event.target.value)}
                    placeholder="Ej. Carlos Mendoza"
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-dv-navy" htmlFor="danvrix-email">
                    Email *
                  </label>
                  <input
                    id="danvrix-email"
                    className="w-full rounded-md border border-dv-border bg-white px-3.5 py-2.5 text-sm text-dv-navy placeholder:text-dv-muted/70 focus:border-dv-blue focus:outline-none focus:ring-2 focus:ring-dv-blue/20"
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
                <label className="text-xs font-bold text-dv-navy" htmlFor="danvrix-website">
                  Tu web o negocio
                </label>
                <input
                  id="danvrix-website"
                  className="w-full rounded-md border border-dv-border bg-white px-3.5 py-2.5 text-sm text-dv-navy placeholder:text-dv-muted/70 focus:border-dv-blue focus:outline-none focus:ring-2 focus:ring-dv-blue/20"
                  type="text"
                  value={form.website}
                  onChange={(event) => update('website', event.target.value)}
                  placeholder="tunegocio.com o el nombre de tu negocio"
                  disabled={status === 'sending'}
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5">
                <span className="text-xs font-bold text-dv-navy">Qué te interesa *</span>
                <div className="grid grid-cols-2 gap-2">
                  {needs.map((need) => (
                    <button
                      key={need}
                      type="button"
                      className={`rounded-md border px-3 py-2 text-left text-xs font-semibold transition-colors ${
                        form.need === need
                          ? 'border-dv-blue bg-dv-blue text-white'
                          : 'border-dv-border bg-white text-dv-muted hover:border-dv-navy/40 hover:text-dv-navy'
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
                <label className="text-xs font-bold text-dv-navy" htmlFor="danvrix-message">
                  Cuéntame un poco más *
                </label>
                <textarea
                  id="danvrix-message"
                  className="w-full resize-none rounded-md border border-dv-border bg-white px-3.5 py-2.5 text-sm text-dv-navy placeholder:text-dv-muted/70 focus:border-dv-blue focus:outline-none focus:ring-2 focus:ring-dv-blue/20"
                  rows={4}
                  required
                  value={form.message}
                  onChange={(event) => update('message', event.target.value)}
                  placeholder="Qué hace tu negocio y qué necesitas construir o mejorar..."
                  disabled={status === 'sending'}
                />
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] leading-relaxed text-dv-muted">
                  Sin spam. Solo uso tus datos para responder a este mensaje.
                </p>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-dv-navy px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-dv-navy-soft disabled:pointer-events-none disabled:opacity-60"
                  disabled={status === 'sending' || !form.need}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>

              <div aria-live="polite">
                {status === 'success' && (
                  <div className="mt-4 rounded-md border border-dv-blue/30 bg-dv-blue-soft p-4 text-sm text-dv-navy">
                    <span className="font-bold">Mensaje recibido.</span> Te responderé a
                    la brevedad con una opinión concreta sobre tu caso.
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    No se pudo enviar el mensaje. Intenta de nuevo o escribe a{' '}
                    <a className="font-semibold underline" href="mailto:hola@danvrix.dev">
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
