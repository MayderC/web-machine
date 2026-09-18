'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { THEMES } from '@/lib/theme';
import { useTheme } from '@/lib/useTheme';

function Swatch({ colors }: { colors: readonly string[] }) {
  return (
    <span className="inline-flex border border-retro-ink" aria-hidden="true">
      {colors.map((color) => (
        <span
          key={color}
          className="w-2.5 h-2.5"
          style={{ backgroundColor: color }}
        />
      ))}
    </span>
  );
}

export function ThemeSwitcher() {
  const t = useTranslations('header');
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const active = THEMES.find((item) => item.id === theme) ?? THEMES[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        aria-label={t('themeLabel')}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="h-8 px-2 bg-retro-card border-2 border-retro-ink flex items-center gap-2 hover:bg-retro-bg transition-colors retro-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
      >
        <Swatch colors={active.swatch} />
        <span className="hidden xl:inline font-mono text-[11px] font-bold text-retro-ink">
          {active.label}
        </span>
        <span className="material-symbols-outlined text-[16px] text-retro-ink">
          {open ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t('themeLabel')}
          className="absolute right-0 top-full mt-2 w-48 z-50 bg-retro-card border-2 border-retro-ink retro-shadow py-1"
        >
          {THEMES.map((item) => {
            const isActive = item.id === theme;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    setTheme(item.id);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors ${
                    isActive ? 'bg-retro-bg' : 'hover:bg-retro-bg'
                  }`}
                >
                  <Swatch colors={item.swatch} />
                  <span className="font-mono text-xs font-bold text-retro-ink">
                    {item.label}
                  </span>
                  {isActive && (
                    <span className="material-symbols-outlined text-[16px] text-retro-ink ml-auto">
                      check
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function ThemeSwatchRow() {
  const t = useTranslations('header');
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-retro-muted">
        {t('themeLabel')}
      </span>
      <div className="flex flex-wrap gap-2" role="listbox" aria-label={t('themeLabel')}>
        {THEMES.map((item) => {
          const isActive = item.id === theme;
          return (
            <button
              key={item.id}
              type="button"
              role="option"
              aria-selected={isActive}
              onClick={() => setTheme(item.id)}
              className={`flex items-center gap-2 px-2.5 py-1.5 border-2 border-retro-ink transition-colors ${
                isActive
                  ? 'bg-retro-ink text-retro-bg'
                  : 'bg-retro-card text-retro-ink hover:bg-retro-bg'
              }`}
            >
              <Swatch colors={item.swatch} />
              <span className="font-mono text-[11px] font-bold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
