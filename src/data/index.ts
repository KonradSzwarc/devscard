import { enUS } from 'date-fns/locale';
import type { Data } from '@/types/data';
import educationData from './sections/education-section.data';
import experienceData from './sections/experience-section.data';
import favoritesData from './sections/favorites-section.data';
import mainData from './sections/main-section.data';
import portfolioData from './sections/portfolio-section.data';
import skillsData from './sections/skills-section.data';
import testimonialsData from './sections/testimonials-section.data';

const data = {
  config: {
    i18n: {
      locale: enUS,
      dateFormat: 'MMMM yyyy',
      translations: {
        now: 'now',
      },
    },
    seo: {
      title: 'Mark Freeman - Senior React Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
      favicon: '/favicon.svg',
    },
    pdf: {
      footer:
        'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
    },
  },
  sections: {
    main: mainData,
    skills: skillsData,
    experience: experienceData,
    portfolio: portfolioData,
    education: educationData,
    testimonials: testimonialsData,
    favorites: favoritesData,
  },
} as const satisfies Data;

export default data;
