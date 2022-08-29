import type { ImageMetadata } from '@astrojs/image';

import type { Icon } from './icon';

export type LocalImage = Promise<{ default: ImageMetadata }>;

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
