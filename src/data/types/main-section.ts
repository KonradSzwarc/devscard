import type { Detail, SectionConfig, Social, Tag } from './common';

export interface MainSection {
  image: string;
  fullName: string;
  role: string;
  details: Detail[];
  description: string;
  tags: Tag[];
  action: {
    label: string;
    url: string;
  };
  socials: Social[];
  config: Omit<SectionConfig, 'title'>;
}
