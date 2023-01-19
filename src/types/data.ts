import type { I18nConfig } from './config/i18n-config.types';
import type { PdfConfig } from './config/pdf-config.types';
import type { SeoConfig } from './config/seo-config.types';
import type { EducationSection } from './sections/education-section.types';
import type { ExperienceSection } from './sections/experience-section.types';
import type { FavoritesSection } from './sections/favorites-section.types';
import type { MainSection } from './sections/main-section.types';
import type { PortfolioSection } from './sections/portfolio-section.types';
import type { SkillsSection } from './sections/skills-section.types';
import type { TestimonialsSection } from './sections/testimonials-section.types';

export type Data = Readonly<{
  config: Readonly<{
    seo: SeoConfig;
    i18n: I18nConfig;
    pdf?: PdfConfig;
  }>;
  sections: Readonly<{
    main: MainSection;
    skills: SkillsSection;
    experience: ExperienceSection;
    portfolio: PortfolioSection;
    education: EducationSection;
    testimonials: TestimonialsSection;
    favorites: FavoritesSection;
  }>;
}>;
