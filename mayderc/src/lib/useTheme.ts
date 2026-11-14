'use client';

import { useSyncExternalStore } from 'react';
import { DEFAULT_THEME, isThemeId, ThemeId } from './theme';

/* -------------------------------------------------------------------------- */
/* Theme (palette)                                                             */
/* -------------------------------------------------------------------------- */

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot(): ThemeId {
  const value = document.documentElement.dataset.theme;
  return isThemeId(value) ? value : DEFAULT_THEME;
}

function getThemeServerSnapshot(): ThemeId {
  return DEFAULT_THEME;
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const setTheme = (id: ThemeId) => {
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem('theme', id);
    } catch {
      // ignore storage access errors
    }
  };

  return { theme, setTheme };
}

/* -------------------------------------------------------------------------- */
/* Mode (light / dark)                                                         */
/* -------------------------------------------------------------------------- */

function subscribeMode(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
}

function getModeSnapshot(): boolean {
  return document.documentElement.classList.contains('dark');
}

function getModeServerSnapshot(): boolean {
  return false;
}

export function useMode() {
  const isDark = useSyncExternalStore(
    subscribeMode,
    getModeSnapshot,
    getModeServerSnapshot
  );

  const setMode = (dark: boolean) => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('mode', dark ? 'dark' : 'light');
    } catch {
      // ignore storage access errors
    }
  };

  const toggleMode = () => setMode(!isDark);

  return { isDark, setMode, toggleMode };
}
