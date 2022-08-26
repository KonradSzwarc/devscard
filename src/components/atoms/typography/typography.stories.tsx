import type { ComponentStory, ComponentMeta } from '@storybook/react';

import TypographyComponent from './typography';

export default {
  title: 'Typography',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>;

export const Typography: ComponentStory<typeof TypographyComponent> = (args) => <TypographyComponent {...args} />;

Typography.args = {
  children: 'Typography text',
  variant: 'paragraph',
};
