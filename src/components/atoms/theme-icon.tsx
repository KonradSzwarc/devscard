import { useEffect, useState } from 'react';

import type { ThemeIcon } from '@/types/common';
import InitialThemeMode from '@/utils/getInitialThemeMode';

import Icon from './icon';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<ThemeIcon>(() => InitialThemeMode);

  const handleClick = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark');
  }, [theme]);

  return (
    <div className="fixed top-2 left-2">
      <button
        onClick={handleClick}
        type="button"
        className="inline-flex justify-center items-center h-10 w-10 rounded-lg transition"
      >
        <Icon
          name={theme === 'dark' ? 'fa6-solid:moon' : 'fa6-solid:sun'}
          color={theme === 'dark' ? 'white' : 'black'}
          size={16}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;
