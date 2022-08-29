import type { SectionConfig, Social, Tag } from './common';

interface Job {
  role: string;
  company: string;
  startDate: Date;
  endDate: Date | null;
  description: string | string[];
  tags: Tag[];
  socials: Social[];
}

export interface ExperienceSection {
  jobs: Job[];
  config: SectionConfig;
}
