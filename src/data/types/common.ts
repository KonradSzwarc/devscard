export type Icon = string;

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
  url?: string;
  description?: string;
}

export interface SectionConfig {
  title: string;
  icon: Icon;
}
