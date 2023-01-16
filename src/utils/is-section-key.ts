import type { SectionKey } from '@/types/data';

const sectionsMap: Record<SectionKey, SectionKey> = {
  main: 'main',
  skills: 'skills',
  experience: 'experience',
  portfolio: 'portfolio',
  testimonials: 'testimonials',
  favorites: 'favorites',
  education: 'education',
};

const isSectionKey = (key: string): key is SectionKey => Object.keys(sectionsMap).includes(key as SectionKey);

export default isSectionKey;
