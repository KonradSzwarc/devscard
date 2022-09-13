const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      primary: colors.indigo,
      gray: colors.gray,
    },
    extend: {
      spacing: {
        22: '5.5rem',
      },
      width: {
        small: 28,
        large: 34,
      },
      height: {
        small: 28,
        large: 34,
      },
    },
  },
  plugins: [],
};
