import type { ExperienceSection } from './experience-section';
import type { FavoritesSection } from './favorites-section';
import type { MainSection } from './main-section';
import type { PortfolioSection } from './portfolio-section';
import type { Seo } from './seo';
import type { SkillsSection } from './skills-section';
import type { TestimonialsSection } from './testimonials-section';

export interface Data {
  seo: Seo;
  main: MainSection;
  skills?: SkillsSection;
  experience?: ExperienceSection;
  portfolio?: PortfolioSection;
  testimonials?: TestimonialsSection;
  favorites?: FavoritesSection;
}
