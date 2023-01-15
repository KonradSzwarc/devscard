import image from '@astrojs/image';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), svelte()],
  vite: {
    ssr: {
      external: ['svgo'],
    },
    plugins: [visualizer()],
  },
});
