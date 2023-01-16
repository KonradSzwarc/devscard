const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class'],
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
      gridTemplateColumns: {
        fluid120: 'repeat(auto-fit, minmax(120px, 1fr))',
        fluid200: 'repeat(auto-fit, minmax(200px, 1fr))',
        fluid240: 'repeat(auto-fit, minmax(240px, 1fr))',
      },
    },
  },
  plugins: [],
};
