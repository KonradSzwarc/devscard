import { useEffect, useState } from 'react';

import Icon from './icon';

const STORAGE_THEME_KEY = 'theme';
const DARK_THEME_KEY = 'dark';
const LIGHT_THEME_KEY = 'light';

type ThemeVariant = typeof DARK_THEME_KEY | typeof LIGHT_THEME_KEY;

const getInitialTheme = (): ThemeVariant => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_THEME_KEY)) {
    return localStorage.getItem(STORAGE_THEME_KEY) === LIGHT_THEME_KEY ? LIGHT_THEME_KEY : DARK_THEME_KEY;
  }
  if (window.matchMedia(`(prefers-color-scheme: ${DARK_THEME_KEY})`).matches) {
    return DARK_THEME_KEY;
  }
  return LIGHT_THEME_KEY;
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeVariant>(() => getInitialTheme());

  const handleClick = () => {
    setTheme((prev) => (prev === LIGHT_THEME_KEY ? DARK_THEME_KEY : LIGHT_THEME_KEY));
  };

  useEffect(() => {
    if (theme === DARK_THEME_KEY) {
      document.documentElement.classList.add(DARK_THEME_KEY);
    }
    if (theme === LIGHT_THEME_KEY) {
      document.documentElement.classList.remove(DARK_THEME_KEY);
    }
    localStorage.setItem(STORAGE_THEME_KEY, theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="fixed bottom-3 left-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-400 shadow-xl transition focus:ring-primary-500 dark:bg-gray-600 dark:text-gray-200"
    >
      <Icon name={theme === DARK_THEME_KEY ? 'ri:moon-fill' : 'ri:sun-line'} size={20} />
    </button>
  );
};

export default ThemeToggle;
