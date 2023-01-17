import type { IconName } from './icon';

export type Photo = Promise<{ default: ImageMetadata }> | string;

export interface Detail {
  label: string;
  value: string | string[];
}

export interface PdfDetail {
  label: string;
  value: string | string[];
  url?: string;
  fullRow?: boolean;
}

export interface Social {
  name: string;
  icon: IconName;
  url: string;
}

export interface Tag {
  name: string;
  icon?: IconName;
  iconColor?: string;
  url?: string;
  description?: string;
}

export interface SectionConfig {
  title: string;
  icon: IconName;
}
