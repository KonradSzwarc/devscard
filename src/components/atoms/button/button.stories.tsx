import type { ComponentMeta, ComponentStory } from '@storybook/react';

import * as C from './button';

export default {
  title: 'Button',
  component: C.Button,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof C.Button>;

export const Button: ComponentStory<typeof C.Button> = (args) => <C.Button {...args} />;

Button.args = {
  children: 'Button text',
};
