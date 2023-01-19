import type { DownloadButton, Photo, LabelledValue, LinkButton, Section, Tag } from '../shared';

export interface MainSection extends Section {
  image: Photo;
  fullName: string;
  role: string;
  details: LabelledValue[];
  pdfDetails?: LabelledValue[];
  description: string;
  tags: Tag[];
  action: DownloadButton;
  links: LinkButton[];
}
