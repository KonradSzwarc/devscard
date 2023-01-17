import type { Detail, PdfDetail, Photo, SectionConfig, Social, Tag } from './common';

export interface Project {
  name: string;
  image: Photo;
  startDate: Date;
  endDate: Date | null;
  details: Detail[];
  pdfDetails?: PdfDetail[];
  description: string;
  tags: Tag[];
  socials: Social[];
}
export interface PortfolioSection {
  projects: Project[];
  config: SectionConfig;
}
