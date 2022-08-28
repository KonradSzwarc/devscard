import type { ImageMetadata } from '@astrojs/image';

export type Icon = string;

export type LocalImage = {
  src: Promise<{ default: ImageMetadata }>;
  alt: string;
};

export interface Detail {
  label: string;
  value: string | string[];
}

export interface Social {
  name: string;
  icon: Icon;
  url: string;
}

export interface Tag {
  name: string;
  icon?: Icon;
  iconColor?: string;
  url?: string;
  description?: string;
}

export interface SectionConfig {
  title: string;
  icon: Icon;
}
