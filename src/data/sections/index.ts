import type { Sections } from '@/types/data';
import type { ReadonlyDeep } from 'type-fest';
import educationData from './education-section.data';
import experienceData from './experience-section.data';
import favoritesData from './favorites-section.data';
import mainData from './main-section.data';
import portfolioData from './portfolio-section.data';
import skillsData from './skills-section.data';
import testimonialsData from './testimonials-section.data';

export const sections = {
  main: mainData,
  skills: skillsData,
  experience: experienceData,
  portfolio: portfolioData,
  education: educationData,
  testimonials: testimonialsData,
  favorites: favoritesData,
} as const satisfies ReadonlyDeep<Sections>;

export default sections;
