import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  typescript: { check: false },
  core: { builder: '@storybook/builder-vite' },
  features: {
    storyStoreV7: true,
  },
  viteFinal: (config) => config,
};

export default config;
