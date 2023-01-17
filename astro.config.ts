import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), compress()],
  vite: {
    plugins: [visualizer()],
  },
});
