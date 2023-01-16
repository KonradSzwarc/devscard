import type { Detail, Photo, SectionConfig, Social, Tag } from './common';

export interface Project {
  name: string;
  image: Photo;
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
