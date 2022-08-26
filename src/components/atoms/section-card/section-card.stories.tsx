import type { ComponentStory, ComponentMeta } from '@storybook/react';

import SectionCardComponent from './section-card';

export default {
  title: 'SectionCard',
  component: SectionCardComponent,
} as ComponentMeta<typeof SectionCardComponent>;

export const SectionCard: ComponentStory<typeof SectionCardComponent> = (args) => <SectionCardComponent {...args} />;

SectionCard.args = {
  children: 'Card content',
};
