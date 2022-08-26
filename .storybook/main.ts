import type { StorybookViteConfig } from '@storybook/builder-vite';
import postcss from 'postcss';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const storybookViteConfig: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: { postcssLoaderOptions: { implementation: postcss } },
    },
  ],
  framework: '@storybook/react',
  typescript: { check: false },
  core: { builder: '@storybook/builder-vite' },
  features: { storyStoreV7: true },
  viteFinal: (config) => mergeConfig(config, { plugins: [tsconfigPaths()] }),
};

export default storybookViteConfig;
