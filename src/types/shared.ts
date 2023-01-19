import type { CircleFlags, Fa6Brands, Fa6Solid, Ri, SimpleIcons } from 'iconify-icon-names';

export type IconName = Fa6Brands | Fa6Solid | SimpleIcons | CircleFlags | Ri;

export type Photo = Promise<{ default: ImageMetadata }> | string;

export type SectionConfig = Readonly<{
  title: string;
  slug: string;
  icon: IconName;
  visible: boolean;
}>;

export type Section = Readonly<{
  config: SectionConfig;
}>;

export type LabelledValue = Readonly<{
  label: string;
  value: Readonly<string | string[]>;
  url?: string;
  fullRow?: boolean;
}>;

export type Tag = Readonly<{
  name: string;
  icon?: IconName;
  iconColor?: string;
  url?: string;
  description?: string;
}>;

export type TagsList = Readonly<{
  title: string;
  tags: Readonly<Tag[]>;
}>;

export type DateRange = Readonly<[from: Date, to: Date | null]>;

export type DownloadButton = Readonly<{
  label: string;
  url: string;
  downloadedFileName?: string;
}>;

export type LinkButton = Readonly<{
  name: string;
  icon: IconName;
  url: string;
}>;

export type Description = Readonly<string | string[]>;
