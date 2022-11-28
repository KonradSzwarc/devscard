import type { ThemeIcon } from '../types/common';

const InitialThemeMode: ThemeIcon =
  (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
  localStorage.getItem('theme') === 'dark'
    ? 'dark'
    : 'light';

export default InitialThemeMode;
