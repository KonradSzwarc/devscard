import { useEffect, useState } from 'react';

import { ThemeType, ThemeVariant } from '../../types/common';
import Icon from './icon';

const themeConstant = 'theme' as const;

const getInitialTheme = (): ThemeVariant => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem(themeConstant)) {
    return localStorage.getItem(themeConstant) === ThemeType.light ? ThemeType.light : ThemeType.dark;
  }
  if (window.matchMedia(`(prefers-color-scheme: ${ThemeType.dark})`).matches) {
    return ThemeType.dark;
  }
  return ThemeType.light;
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeVariant>(() => getInitialTheme());

  const handleClick = () => {
    setTheme((prev) => (prev === ThemeType.light ? ThemeType.dark : ThemeType.light));
  };

  useEffect(() => {
    if (theme === ThemeType.dark) {
      document.documentElement.classList.add(ThemeType.dark);
    }
    if (theme === ThemeType.light) {
      document.documentElement.classList.remove(ThemeType.dark);
    }
    localStorage.setItem(themeConstant, theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="inline-flex justify-center items-center h-10 w-10 rounded-lg transition fixed top-2 left-2"
    >
      <Icon
        name={theme === ThemeType.dark ? 'ri:moon-fill' : 'ri:sun-line'}
        color={theme === ThemeType.dark ? 'white' : 'black'}
        size={24}
      />
    </button>
  );
};

export default ThemeToggle;
