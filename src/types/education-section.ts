import type { SectionConfig, Social } from './common';

export interface EducationItem {
  title: string;
  institution: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  socials: Social[];
}

export interface EducationSection {
  educationItems: EducationItem[];
  config: SectionConfig;
}
