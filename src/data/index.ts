import type { EducationSection } from '@/types/education-section';
import type { ExperienceSection } from '@/types/experience-section';
import type { FavoritesSection } from '@/types/favorites-section';
import type { Pdf } from '@/types/pdf';
import type { I18n } from '@/types/i18n';
import type { MainSection } from '@/types/main-section';
import type { PortfolioSection } from '@/types/portfolio-section';
import type { Seo } from '@/types/seo';
import type { SkillsSection } from '@/types/skills-section';
import type { TestimonialsSection } from '@/types/testimonials-section';

import educationData from './sections/education';
import experienceData from './sections/experience';
import favoritesData from './sections/favorites';
import mainData from './sections/main';
import portfolioData from './sections/portfolio';
import skillsData from './sections/skills';
import testimonialsData from './sections/testimonials';

export interface Data {
  i18n: I18n;
  seo: Seo;
  pdf: Pdf;
  main: MainSection;
  skills?: SkillsSection;
  experience?: ExperienceSection;
  portfolio?: PortfolioSection;
  education?: EducationSection;
  testimonials?: TestimonialsSection;
  favorites?: FavoritesSection;
}

const data: Data = {
  i18n: {
    locale: 'en-US',
    translations: {
      now: 'now',
    },
  },
  seo: {
    title: 'Mark Freeman - Senior React Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
  },
  pdf: {
    footer:
      'I hereby give consent for my personal data included in my application to be processed for the purposes of the recruitment process.',
  },
  main: mainData,
  skills: skillsData,
  experience: experienceData,
  portfolio: portfolioData,
  education: educationData,
  testimonials: testimonialsData,
  favorites: favoritesData,
};

export default data;
