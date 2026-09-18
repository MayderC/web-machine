'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { WireframeCanvas } from './WireframeCanvas';

export function Hero() {
  const t = useTranslations('hero');
  const heroT = useTranslations('hero.capabilities');
  const canvasT = useTranslations('canvas3d');

  return (
    <section id="inicio" className="w-full min-h-[calc(100vh-4rem)] flex items-center relative py-12 md:py-20 grid-paper border-b-2 border-retro-ink">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna Texto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-retro-card border-2 border-retro-ink text-retro-ink font-mono text-xs font-bold retro-shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-retro-ink"></span>
                {t('badge')}
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-retro-muted bg-retro-card/70 px-2 py-1 border border-retro-ink/30">
                {t('badgeSub')}
              </span>
            </div>
            <h1 className="heading-display">
              {t('headline')}
            </h1>
            <p className="body-lg max-w-2xl">
              {t('description')}
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link className="btn-primary group" href="#contacto">
                <span>{t('ctaPrimary')}</span>
                <span className="material-symbols-outlined text-[18px] ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link className="btn-secondary" href="#proyectos">
                <span>{t('ctaSecondary')}</span>
                <span className="material-symbols-outlined text-[18px] ml-2">terminal</span>
              </Link>
            </div>
            {/* Strip de capacidades */}
            <div className="mt-2 font-mono text-xs text-retro-ink bg-retro-card p-3.5 border-2 border-retro-ink retro-shadow-sm">
              <div className="flex flex-wrap items-center gap-2 leading-relaxed">
                <span className="w-2 h-2 bg-retro-ink inline-block"></span>
                <span className="font-bold">{heroT('frontend')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('react')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('backend')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('apis')}</span>
                <span className="text-neutral-400">·</span>
                <span className="bg-retro-yellow/60 text-retro-on-accent px-1 border border-retro-ink font-bold">{heroT('typescript')}</span>
                <span className="text-neutral-400">·</span>
                <span className="bg-retro-mint/60 text-retro-on-accent px-1 border border-retro-ink font-bold">{heroT('python')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold underline decoration-2">{heroT('llms')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('rag')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('agents')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('voice')}</span>
                <span className="text-neutral-400">·</span>
                <span className="font-bold">{heroT('ocr')}</span>
              </div>
            </div>
          </div>
          {/* Columna Derecha: Visor Geométrico Wireframe Retro */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="w-full bg-retro-card border-2 border-retro-ink retro-shadow-lg p-4 flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-2 border-b-2 border-retro-ink font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-retro-ink"></span>
                  <span className="font-bold tracking-wider">{canvasT('title')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-retro-muted font-bold" id="viewport-fps">60 {canvasT('fps')}</span>
                  <span className="px-1.5 py-0.5 border border-retro-ink bg-retro-yellow text-retro-on-accent font-bold text-[10px]">{canvasT('engine')}</span>
                </div>
              </div>
              <WireframeCanvas />
              <div className="mt-3 pt-2 border-t border-retro-ink/30 flex items-center justify-between font-mono text-[10px] font-bold tracking-wider text-retro-muted">
                <span>{canvasT('matrixNote')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}