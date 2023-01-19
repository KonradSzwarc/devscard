import type { DateRange, Description, LinkButton, Section } from '../shared';

export type Diploma = Readonly<{
  title: string;
  institution: string;
  dates: DateRange;
  description: Description;
  links: Readonly<LinkButton[]>;
}>;

export interface EducationSection extends Section {
  readonly diplomas: Readonly<Diploma[]>;
}
