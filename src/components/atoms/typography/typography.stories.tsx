import type { ComponentMeta, ComponentStory } from '@storybook/react';

import * as C from './typography';

export default {
  title: 'Typography',
  component: C.Typography,
} as ComponentMeta<typeof C.Typography>;

export const Typography: ComponentStory<typeof C.Typography> = (args) => <C.Typography {...args} />;

Typography.args = {
  children: 'Typography text',
  variant: 'paragraph',
};
