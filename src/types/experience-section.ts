import type { SectionConfig, Social, Tag } from './common';

interface ExperienceItem {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string | string[];
  technologies: Tag[];
  socials: Social[];
}

export interface ExperienceSection {
  items: ExperienceItem[];
  config: SectionConfig;
}
