import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Aerospace Engineering',
      institution: 'K. N. Toosi University of Technology',
      image: import('@/assets/KNTU.png'),
      dates: [new Date('2020.09'), new Date('2024.07')],
      description: "Bachelor's degree in Aerospace Engineering.",
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
