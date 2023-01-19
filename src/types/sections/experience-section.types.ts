import type { DateRange, Description, LinkButton, Section, TagsList } from '../shared';

export type Job = Readonly<{
  role: string;
  company: string;
  dates: DateRange;
  description: Description;
  tagsList: TagsList;
  links: Readonly<LinkButton[]>;
}>;

export interface ExperienceSection extends Section {
  readonly jobs: Readonly<Job[]>;
}
