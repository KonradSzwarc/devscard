import type { DateRange, Description, LinkButton, Section, TagsList } from '../shared';

export interface Job {
  role: string;
  company: string;
  dates: DateRange;
  description: Description;
  tagsList: TagsList;
  links: LinkButton[];
}

export interface ExperienceSection extends Section {
  jobs: Job[];
}
