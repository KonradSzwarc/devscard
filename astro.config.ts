import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image(),
    compress(),
    partytown({ config: { forward: ['dataLayer.push', 'clarity.push'] } }),
  ],
  vite: {
    plugins: [visualizer()],
  },
});
