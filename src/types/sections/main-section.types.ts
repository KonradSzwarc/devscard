import type { DownloadButton, Photo, LabelledValue, LinkButton, Section, Tag } from '../shared';

export interface MainSection extends Section {
  /**
   * Your image.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 208x208px
   */
  image: Photo;

  /**
   * Your name.
   */
  fullName: string;

  /**
   * Your current role.
   */
  role: string;

  /**
   * Label-value pairs with some key details about you.
   *
   * E.g. phone, email, location, expected salary.
   */
  details: LabelledValue[];

  /**
   * [PDF] Labeled-value pairs that will be used in the PDF version of your resume.
   *
   * You can use it to add your social media profiles as those listed under the `links` property aren't used in the PDF.
   *
   * If not provided, the `details` will be used instead.
   */
  pdfDetails?: LabelledValue[];

  /**
   * A short overview of you and your experience.
   */
  description: string;

  /**
   * [WEB] Any information that you want to highlight.
   */
  tags: Tag[];

  /**
   * [WEB] A button that will be used to download your resume.
   */
  action: DownloadButton;

  /**
   * [WEB] Your social media profiles.
   */
  links: LinkButton[];
}
