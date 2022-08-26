import type { ComponentStory, ComponentMeta } from '@storybook/react';

import LabelledValueComponent from './labelled-value';

export default {
  title: 'LabelledValue',
  component: LabelledValueComponent,
} as ComponentMeta<typeof LabelledValueComponent>;

export const LabelledValue: ComponentStory<typeof LabelledValueComponent> = (args) => (
  <LabelledValueComponent {...args} />
);

LabelledValue.args = {
  label: 'Label',
  children: 'Value',
};
