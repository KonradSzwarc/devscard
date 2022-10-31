import type { Data } from '@/types/data';

const SECTION_IDS: Record<Exclude<keyof Data, 'seo'>, string> = {
  experience: 'experience',
  favorites: 'favorites',
  main: '',
  portfolio: 'portfolio',
  skills: 'skills',
  testimonials: 'testimonials',
};

export default SECTION_IDS;
