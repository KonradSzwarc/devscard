import type { CircleFlags, Fa6Brands, Fa6Solid, Ri, SimpleIcons } from 'iconify-icon-names';

export type IconName = Fa6Brands | Fa6Solid | SimpleIcons | CircleFlags | Ri;

export type Photo = Promise<{ default: ImageMetadata }> | string;

export type DateRange = [from: Date, to: Date | null];

export type Description = string | string[];

export interface SectionConfig {
  title: string;
  slug: string;
  icon: IconName;
  visible: boolean;
}

export interface Section {
  config: SectionConfig;
}

export interface LabelledValue {
  label: string;
  value: string | string[];
  url?: string;
  fullRow?: boolean;
}

export interface Tag {
  name: string;
  icon?: IconName;
  iconColor?: string;
  url?: string;
  description?: string;
}

export interface TagsList {
  title: string;
  tags: Tag[];
}

export interface DownloadButton {
  label: string;
  url: string;
  downloadedFileName?: string;
}

export interface LinkButton {
  name: string;
  icon: IconName;
  url: string;
}
