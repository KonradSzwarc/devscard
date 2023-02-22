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
      title: 'Systems engineering with emphasis on building applications',
      institution: 'Universidad del Istmo, Panamá',
      image: import('@/assets/logos/Logo_udelistmo.jpg'),
      dates: [new Date('2014.01'), new Date('2016.12')],
      description: '',
      links: [website({ url: 'https://www.udelistmo.edu/' })],
    },
    {
      title: 'Aviation Mechanic',
      institution: 'Instituto Superior de Formación Profesional Aeronáutica',
      image: import('@/assets/logos/logoIsfpa.png'),
      dates: [new Date('2007'), new Date('2009.02')],
      description: '',
      links: [website({ url: 'https://isfpa.edu.pa/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
