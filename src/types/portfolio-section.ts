import type { Detail, LocalImage, SectionConfig, Social, Tag } from './common';

interface Project {
  name: string;
  image?: LocalImage;
  startDate: Date;
  endDate: Date | null;
  details: Detail[];
  description: string;
  tags: Tag[];
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
