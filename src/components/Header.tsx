'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';
import { ThemeSwitcher, ThemeSwatchRow } from './ThemeSwitcher';
import { useMode } from '@/lib/useTheme';

export function Header() {
  const t = useTranslations('header');
  const nav = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleMode } = useMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangSwitch = (lang: 'es' | 'en') => {
    setMobileOpen(false);
    if (lang === locale) return;

    // Replace the locale segment, keeping the rest of the path.
    const segments = pathname.split('/');
    segments[1] = lang;
    const newPath = segments.join('/') || `/${lang}`;
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    router.push(`${newPath}${hash}`);
  };

  const links = [
    { key: 'home', label: nav('home'), href: `/${locale}`, active: true },
    { key: 'services', label: nav('services'), href: `/${locale}#servicios` },
    { key: 'projects', label: nav('projects'), href: `/${locale}#proyectos` },
    { key: 'about', label: nav('about'), href: `/${locale}#sobre-mi` },
    { key: 'contact', label: nav('contact'), href: `/${locale}#contacto` },
  ];

  const languageSwitcher = (
    <div
      className="flex items-center bg-retro-card border-2 border-retro-ink p-0.5"
      role="group"
      aria-label="Language selection"
    >
      <button
        className={`px-2 py-0.5 font-mono text-[11px] font-bold ${
          locale === 'es' ? 'bg-retro-ink text-retro-bg' : 'text-retro-ink hover:bg-retro-bg'
        }`}
        onClick={() => handleLangSwitch('es')}
        type="button"
        aria-current={locale === 'es' ? 'true' : undefined}
      >
        ES
      </button>
      <button
        className={`px-2 py-0.5 font-mono text-[11px] font-bold ${
          locale === 'en' ? 'bg-retro-ink text-retro-bg' : 'text-retro-ink hover:bg-retro-bg'
        }`}
        onClick={() => handleLangSwitch('en')}
        type="button"
        aria-current={locale === 'en' ? 'true' : undefined}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-retro-bg/95 backdrop-blur-sm border-b-2 border-retro-ink transition-colors ${
        isScrolled ? 'shadow-[0_2px_0_var(--c-shadow)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2 group" href={`/${locale}`}>
            <span className="font-mono text-xs px-2 py-0.5 bg-retro-ink text-retro-bg font-bold tracking-wider">
              [MC]
            </span>
            <span className="font-sans font-bold text-xl tracking-tight text-retro-ink group-hover:underline underline-offset-4">
              {t('title')}
            </span>
          </Link>
          <span className="hidden lg:inline-flex items-center px-2 py-0.5 border border-retro-ink bg-retro-card font-mono text-[10px] font-bold tracking-widest text-retro-ink">
            {t('subtitle')}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.key}
              className={`font-mono text-xs font-bold px-3 py-1.5 border-2 transition-colors ${
                link.active
                  ? 'bg-retro-ink text-retro-bg border-retro-ink'
                  : 'text-retro-ink border-transparent hover:border-retro-ink hover:bg-retro-card'
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:block">{languageSwitcher}</div>
          <div className="hidden md:block">
            <ThemeSwitcher />
          </div>
          <button
            aria-label={t('themeToggle')}
            className="w-8 h-8 bg-retro-card border-2 border-retro-ink flex items-center justify-center text-retro-ink hover:bg-retro-yellow hover:text-retro-on-accent transition-colors retro-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            onClick={toggleMode}
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]" id="theme-icon">
              {isDark ? 'dark_mode' : 'light_mode'}
            </span>
          </button>
          <Link
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-yellow text-retro-on-accent retro-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--c-shadow)] transition-all"
            href={`/${locale}#contacto`}
          >
            <span>{t('cta')}</span>
          </Link>
          <button
            aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
            aria-expanded={mobileOpen}
            className="md:hidden w-8 h-8 bg-retro-card border-2 border-retro-ink flex items-center justify-center text-retro-ink hover:bg-retro-yellow hover:text-retro-on-accent transition-colors retro-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-retro-ink bg-retro-bg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile navigation">
              {links.map((link) => (
                <Link
                  key={link.key}
                  onClick={() => setMobileOpen(false)}
                  className={`font-mono text-xs font-bold px-3 py-2.5 border-2 border-retro-ink transition-colors ${
                    link.active
                      ? 'bg-retro-ink text-retro-bg'
                      : 'bg-retro-card text-retro-ink hover:bg-retro-bg'
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeSwatchRow />
            <div className="flex items-center justify-between gap-3">
              {languageSwitcher}
              <Link
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 border-2 border-retro-ink font-mono text-xs font-bold bg-retro-yellow text-retro-on-accent retro-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--c-shadow)] transition-all"
                href={`/${locale}#contacto`}
              >
                <span>{t('cta')}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
