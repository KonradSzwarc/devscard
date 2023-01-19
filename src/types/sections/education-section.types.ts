import type { DateRange, Description, LinkButton, Section } from '../shared';

export interface Diploma {
  title: string;
  institution: string;
  dates: DateRange;
  description: Description;
  links: LinkButton[];
}

export interface EducationSection extends Section {
  diplomas: Diploma[];
}
