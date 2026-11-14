export const THEMES = [
  {
    id: 'paper',
    label: 'Paper',
    swatch: ['#f7f6f0', '#f6e05e', '#a7f3d0'],
  },
  {
    id: 'mono',
    label: 'Mono',
    swatch: ['#f5f5f5', '#111111', '#9a9a9a'],
  },
  {
    id: 'terminal',
    label: 'Terminal',
    swatch: ['#f2f4ef', '#4e7a55', '#cfe0c9'],
  },
  {
    id: 'blueprint',
    label: 'Blueprint',
    swatch: ['#eff2f7', '#1f4e79', '#c7d6e4'],
  },
  {
    id: 'sand',
    label: 'Sand',
    swatch: ['#f2ece1', '#d97706', '#b7cdaf'],
  },
  {
    id: 'ocean',
    label: 'Ocean',
    swatch: ['#edf3f5', '#0e7490', '#b8dce0'],
  },
  {
    id: 'violet',
    label: 'Violet',
    swatch: ['#f3f0f8', '#6d28d9', '#d9cbf2'],
  },
] as const;

export type ThemeId = (typeof THEMES)[number]['id'];

export const DEFAULT_THEME: ThemeId = 'paper';

export function isThemeId(value: string | null | undefined): value is ThemeId {
  return !!value && THEMES.some((theme) => theme.id === value);
}
