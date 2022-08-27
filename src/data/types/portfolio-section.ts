import type { Detail, SectionConfig, Social, Tag } from './common';

interface Project {
  name: string;
  image?: string;
  startDate: Date;
  endDate: Date | null;
  details: Detail[];
  description: string;
  technologies: Tag[];
  socials: Social[];
}

interface PortfolioFilter {
  byDetail?: string[];
  byTechnology?: boolean;
  byStartDate?: boolean;
  byEndDate?: boolean;
}

interface PortfolioConfig extends SectionConfig {
  filter: PortfolioFilter | null;
}

export interface PortfolioSection {
  projects: Project[];
  config: PortfolioConfig;
}
