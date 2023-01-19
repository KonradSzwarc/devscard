import type { DownloadButton, Photo, LabelledValue, LinkButton, Section, Tag } from '../shared';

export interface MainSection extends Section {
  readonly image: Photo;
  readonly fullName: string;
  readonly role: string;
  readonly details: Readonly<LabelledValue[]>;
  readonly description: string;
  readonly tags: Readonly<Tag[]>;
  readonly action: DownloadButton;
  readonly links: Readonly<LinkButton[]>;
}
