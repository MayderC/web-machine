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
    <header className="sticky top-0 z-50 border-b border-dv-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-8">
        <a className="group flex items-center gap-2.5" href="#inicio">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-dv-navy font-mono text-sm font-bold text-white">
            D
          </span>
          <span className="font-sans text-lg font-extrabold tracking-tight text-dv-navy">
            Danvrix<span className="text-dv-blue">.dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-dv-muted transition-colors hover:bg-dv-blue-soft hover:text-dv-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-blue"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden items-center gap-1.5 rounded-md bg-dv-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-dv-navy-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dv-blue sm:inline-flex"
            href="#contacto"
          >
            Hablemos
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="danvrix-mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-dv-border text-dv-navy transition-colors hover:bg-dv-blue-soft md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="material-symbols-outlined text-[20px]">
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="danvrix-mobile-menu" className="border-t border-dv-border bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Navegación móvil">
            {links.map((link) => (
              <a
                key={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-dv-muted transition-colors hover:bg-dv-blue-soft hover:text-dv-navy"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-dv-navy px-4 py-2.5 text-sm font-semibold text-white"
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
