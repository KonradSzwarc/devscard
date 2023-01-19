import type { EducationSection } from '@/types/sections/education-section.types';
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
      title: 'Information Technology',
      institution: 'Wrocław University of Science and Technology',
      dates: [new Date('2014.10'), new Date('2016.07')],
      description: 'Master degree. Specialization in software development.',
      links: [website({ url: '#' })],
    },
    {
      title: 'Information Technology',
      institution: 'Wrocław University of Science and Technology',
      dates: [new Date('2011.10'), new Date('2014.07')],
      description: "Bachelor's degree. Specialization in application development.",
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies EducationSection;

export default educationSectionData;
