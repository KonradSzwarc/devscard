import type { IconName } from './icon';

export type LocalImage = Promise<{ default: ImageMetadata }>;

export interface Detail {
  label: string;
  value: string | string[];
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

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const theme = Object.values(ThemeType);
export type ThemeVariant = typeof theme[number];
