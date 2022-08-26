import type { ComponentMeta, ComponentStory } from '@storybook/react';

import * as C from './labelled-value';

export default {
  title: 'LabelledValue',
  component: C.LabelledValue,
} as ComponentMeta<typeof C.LabelledValue>;

export const LabelledValue: ComponentStory<typeof C.LabelledValue> = (args) => <C.LabelledValue {...args} />;

LabelledValue.args = {
  label: 'Label',
  children: 'Value',
};
