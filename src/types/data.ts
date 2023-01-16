import type { EducationSection } from './education-section';
import type { ExperienceSection } from './experience-section';
import type { FavoritesSection } from './favorites-section';
import type { I18n } from './i18n';
import type { MainSection } from './main-section';
import type { PortfolioSection } from './portfolio-section';
import type { Seo } from './seo';
import type { SkillsSection } from './skills-section';
import type { TestimonialsSection } from './testimonials-section';

export interface Data {
  i18n: I18n;
  seo: Seo;
  main: MainSection;
  skills?: SkillsSection;
  experience?: ExperienceSection;
  portfolio?: PortfolioSection;
  education?: EducationSection;
  testimonials?: TestimonialsSection;
  favorites?: FavoritesSection;
}

export type SectionKey = Exclude<keyof Data, 'seo' | 'i18n'>;
