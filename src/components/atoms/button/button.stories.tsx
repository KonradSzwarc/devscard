import type { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonComponent from './button';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as ComponentMeta<typeof ButtonComponent>;

export const Button: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;

Button.args = {
  children: 'Button text',
};
