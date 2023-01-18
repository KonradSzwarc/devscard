import type { Detail, PdfDetail, Photo, SectionConfig, Social, Tag } from './common';

export interface MainSection {
  image: Photo;
  fullName: string;
  role: string;
  details: Detail[];
  pdfDetails?: PdfDetail[];
  description: string;
  tags: Tag[];
  action: {
    label: string;
    url: string;
    downloadedFileName?: string;
  };
  socials: Social[];
  config: SectionConfig;
}
