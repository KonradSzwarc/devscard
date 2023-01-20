import type { DateRange, Photo, LabelledValue, LinkButton, Section, TagsList, Description } from '../shared';

export interface Project {
  name: string;
  image: Photo;
  dates: DateRange;
  details: LabelledValue[];
  pdfDetails?: LabelledValue[];
  description: Description;
  tagsList: TagsList;
  links: LinkButton[];
}

export interface PortfolioSection extends Section {
  projects: Project[];
}
