'use client';

import { useState } from 'react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Asistentes', href: '#asistentes' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Estudio', href: '#estudio' },
  { label: 'Contacto', href: '#contacto' },
];

export function DanvrixHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dv-border bg-dv-bg">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a className="flex items-center gap-2.5" href="#inicio">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-dv-primary text-[13px] font-medium text-dv-on-primary">
            D
          </span>
          <span className="text-[17px] font-medium tracking-[-0.01em] text-dv-ink">
            Danvrix<span className="text-dv-accent-ink">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-lg px-3 py-2 text-sm text-dv-ink-2 transition-colors hover:bg-dv-raised hover:text-dv-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-accent"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a className="dv-btn dv-btn-primary dv-btn-quiet hidden sm:inline-flex" href="#contacto">
            Hablemos
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="danvrix-mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-dv-border text-dv-ink transition-colors hover:bg-dv-raised focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-accent md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined text-[18px]">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="danvrix-mobile-menu" className="border-t border-dv-border bg-dv-surface md:hidden">
          <nav
            className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4"
            aria-label="Navegación móvil"
          >
            {links.map((link) => (
              <a
                key={link.href}
                className="rounded-lg px-3 py-2.5 text-sm text-dv-ink-2 transition-colors hover:bg-dv-raised hover:text-dv-ink"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="dv-btn dv-btn-primary mt-2"
              href="#contacto"
              onClick={() => setOpen(false)}
            >
              Hablemos
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
