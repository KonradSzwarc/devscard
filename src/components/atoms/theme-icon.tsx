import { useEffect, useState } from 'react';

import type { ThemeIcon } from '../../types/common';
import Icon from './icon';

const getInitialTheme = (): ThemeIcon => {
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('theme')) {
    return sessionStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  }
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeIcon>(() => getInitialTheme());

  const handleClick = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={handleClick}
      type="button"
      className="inline-flex justify-center items-center h-10 w-10 rounded-lg transition fixed top-2 left-2"
    >
      <Icon
        name={theme === 'dark' ? 'fa6-solid:moon' : 'ri:sun-line'}
        color={theme === 'dark' ? 'white' : 'black'}
        size={24}
      />
    </button>
  );
};

export default ThemeToggle;
