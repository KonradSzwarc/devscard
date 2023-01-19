import type { DateRange, Photo, LabelledValue, LinkButton, Section, TagsList, Description } from '../shared';

export type Project = Readonly<{
  name: string;
  image: Photo;
  dates: DateRange;
  details: Readonly<LabelledValue[]>;
  description: Description;
  tagsList: TagsList;
  links: Readonly<LinkButton[]>;
}>;

export interface PortfolioSection extends Section {
  readonly projects: Readonly<Project[]>;
}
