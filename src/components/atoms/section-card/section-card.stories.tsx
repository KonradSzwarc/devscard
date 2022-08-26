import type { ComponentMeta, ComponentStory } from '@storybook/react';

import * as C from './section-card';

export default {
  title: 'SectionCard',
  component: C.SectionCard,
} as ComponentMeta<typeof C.SectionCard>;

export const SectionCard: ComponentStory<typeof C.SectionCard> = (args) => <C.SectionCard {...args} />;

SectionCard.args = {
  children: 'Card content',
};
