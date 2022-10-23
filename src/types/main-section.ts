import type { Detail, LocalImage, SectionConfig, Social, Tag } from './common';

export interface MainSection {
  image: LocalImage;
  fullName: string;
  role: string;
  details: Detail[];
  description: string;
  tags: Tag[];
  action: {
    label: string;
    url: string;
    downloadedFileName?: string;
  };
  socials: Social[];
  config: Omit<SectionConfig, 'title'>;
}
