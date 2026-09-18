'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="w-full bg-retro-bg py-12 border-t-2 border-retro-ink">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold px-1.5 py-0.5 bg-retro-ink text-retro-bg uppercase">[MAYDERC]</span>
              <span className="font-sans font-bold text-lg text-retro-ink">Software & Web</span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-retro-muted max-w-md leading-relaxed">
              {t('description')}
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-retro-muted">
              {t('navigation')}
            </span>
            <div className="flex flex-col gap-1 font-mono text-xs">
              <Link className="text-retro-ink hover:underline" href="#servicios">{nav('services')}</Link>
              <Link className="text-retro-ink hover:underline" href="#proyectos">{nav('projects')}</Link>
              <Link className="text-retro-ink hover:underline" href="#sobre-mi">{nav('about')}</Link>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-retro-muted">
              {t('links')}
            </span>
            <div className="flex flex-col gap-1 font-mono text-xs">
              <a className="text-retro-ink hover:underline flex items-center gap-1" href="https://github.com/mayderc" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[14px]">terminal</span> GitHub // @mayderc
              </a>
              <a className="text-retro-ink hover:underline flex items-center gap-1" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined text-[14px]">work</span> LinkedIn
              </a>
              <a className="text-retro-ink hover:underline flex items-center gap-1" href="mailto:contacto@mayderc.dev">
                <span className="material-symbols-outlined text-[14px]">mail</span> contacto@mayderc.dev
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t-2 border-retro-ink flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <span className="text-retro-muted">{t('copyright')}</span>
          <div className="flex items-center gap-4">
            <span className="text-retro-muted">{t('timezone')}</span>
            <span className="bg-retro-ink text-retro-bg px-2 py-0.5 font-bold">{t('version')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}