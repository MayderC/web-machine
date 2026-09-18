'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect, useSyncExternalStore } from 'react';

function subscribeToMode(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

function getModeSnapshot() {
  return document.documentElement.classList.contains('dark');
}

function getModeServerSnapshot() {
  return false;
}

export function Header() {
  const t = useTranslations('header');
  const nav = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLang, setActiveLang] = useState<'es' | 'en'>('es');
  const isDark = useSyncExternalStore(
    subscribeToMode,
    getModeSnapshot,
    getModeServerSnapshot
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangSwitch = (lang: 'es' | 'en') => {
    setActiveLang(lang);
    const newPath = pathname.replace(`/${locale}`, `/${lang}`);
    router.push(newPath);
  };

  const handleThemeToggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('mode', next ? 'dark' : 'light');
    } catch {
      // ignore storage access errors
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-retro-bg/95 backdrop-blur-sm border-b-2 border-retro-ink transition-colors ${isScrolled ? 'shadow-[0_2px_0_var(--c-shadow)]' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 group" href={`/${locale}`}>
            <span className="font-mono text-xs px-2 py-0.5 bg-retro-ink text-retro-bg font-bold tracking-wider">[MC]</span>
            <span className="font-sans font-bold text-xl tracking-tight text-retro-ink group-hover:underline underline-offset-4">
              {t('title')}
            </span>
          </Link>
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 border border-retro-ink bg-retro-card font-mono text-[10px] font-bold tracking-widest text-retro-ink">
            {t('subtitle')}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          <Link className="font-mono text-xs font-bold px-3 py-1.5 bg-retro-ink text-retro-bg border-2 border-retro-ink" href={`/${locale}`}>
            {nav('home')}
          </Link>
          <Link className="font-mono text-xs font-bold px-3 py-1.5 text-retro-ink border-2 border-transparent hover:border-retro-ink hover:bg-retro-card transition-colors" href={`/${locale}#servicios`}>
            {nav('services')}
          </Link>
          <Link className="font-mono text-xs font-bold px-3 py-1.5 text-retro-ink border-2 border-transparent hover:border-retro-ink hover:bg-retro-card transition-colors" href={`/${locale}#proyectos`}>
            {nav('projects')}
          </Link>
          <Link className="font-mono text-xs font-bold px-3 py-1.5 text-retro-ink border-2 border-transparent hover:border-retro-ink hover:bg-retro-card transition-colors" href={`/${locale}#sobre-mi`}>
            {nav('about')}
          </Link>
          <Link className="font-mono text-xs font-bold px-3 py-1.5 text-retro-ink border-2 border-transparent hover:border-retro-ink hover:bg-retro-card transition-colors" href={`/${locale}#contacto`}>
            {nav('contact')}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-retro-card border-2 border-retro-ink p-0.5" role="group" aria-label="Language selection">
            <button
              className={`px-2 py-0.5 font-mono text-[11px] font-bold ${activeLang === 'es' ? 'bg-retro-ink text-retro-bg' : 'text-retro-ink hover:bg-retro-bg'}`}
              onClick={() => handleLangSwitch('es')}
              type="button"
              aria-pressed={activeLang === 'es'}
            >
              ES
            </button>
            <button
              className={`px-2 py-0.5 font-mono text-[11px] font-bold ${activeLang === 'en' ? 'bg-retro-ink text-retro-bg' : 'text-retro-ink hover:bg-retro-bg'}`}
              onClick={() => handleLangSwitch('en')}
              type="button"
              aria-pressed={activeLang === 'en'}
            >
              EN
            </button>
          </div>
          <button
            aria-label={t('themeToggle')}
            className="w-8 h-8 bg-retro-card border-2 border-retro-ink flex items-center justify-center text-retro-ink hover:bg-retro-yellow hover:text-retro-on-accent transition-colors retro-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            onClick={handleThemeToggle}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]" id="theme-icon">{isDark ? 'dark_mode' : 'light_mode'}</span>
          </button>
          <Link
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-yellow text-retro-on-accent hover:bg-retro-ink hover:text-retro-bg transition-colors retro-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            href={`/${locale}#contacto`}
          >
            <span>{t('cta')}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}