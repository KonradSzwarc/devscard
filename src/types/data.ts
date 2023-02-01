import type { I18nConfig } from './config/i18n-config.types';
import type { PdfConfig } from './config/pdf-config.types';
import type { MetaConfig } from './config/meta-config.types';
import type { EducationSection } from './sections/education-section.types';
import type { ExperienceSection } from './sections/experience-section.types';
import type { FavoritesSection } from './sections/favorites-section.types';
import type { MainSection } from './sections/main-section.types';
import type { PortfolioSection } from './sections/portfolio-section.types';
import type { SkillsSection } from './sections/skills-section.types';
import type { TestimonialsSection } from './sections/testimonials-section.types';

export type Config = {
  /**
   * [WEB] Page metadata used for SEO and social media sharing.
   */
  meta: MetaConfig;

  /**
   * Language and date display configuration.
   */
  i18n: I18nConfig;

  /**
   * [PDF] Configuration of the pdf generation.
   */
  pdf?: PdfConfig;
};

export type Sections = {
  /**
   * Basic information about you.
   */
  main: MainSection;

  /**
   * Grouped lists of your skills.
   */
  skills: SkillsSection;

  /**
   * Your employment history.
   */
  experience: ExperienceSection;

  /**
   * Your projects and initiatives.
   */
  portfolio: PortfolioSection;

  /**
   * Your education degrees and certifications.
   */
  education: EducationSection;

  /**
   * [WEB] Recommendations from your previous employers and people you worked with.
   */
  testimonials: TestimonialsSection;

  /**
   * [WEB] List of sources you use to gain knowledge and inspiration.
   */
  favorites: FavoritesSection;
};

/**
 * All data used to generate the cv.
 */
export interface Data {
  /**
   * Global configuration of the web and pdf versions of the cv.
   */
  config: Config;

  /**
   * Configurations for the particular sections of the cv.
   */
  sections: Sections;
}
