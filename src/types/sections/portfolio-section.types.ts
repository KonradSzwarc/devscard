import type { DateRange, Photo, LabelledValue, LinkButton, Section, TagsList } from '../shared';

export interface Project {
  /**
   * Name of the project.
   */
  name: string;

  /**
   * [WEB] Logo of the project.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 56x56px
   */
  image?: Photo;

  /**
   * Date range when you were working on the project.
   */
  dates: DateRange;

  /**
   * Label-value pairs with some key details about the project.
   */
  details: LabelledValue[];

  /**
   * [PDF] Labeled-value pairs that will be used in the PDF version of your resume.
   *
   * You can use it to add some links related to your project as those listed under the `links` property aren't used in the PDF.
   *
   * If not provided, the `details` will be used instead.
   */
  pdfDetails?: LabelledValue[];

  /**
   * A short overview of the project. You can use markdown syntax.
   */
  description: string;

  /**
   * Any information that you want to highlight.
   * We recommend to describe the technologies used in the project.
   */
  tagsList: TagsList;

  /**
   * [WEB] Links related to your project (e.g. GitHub repository, live demo, mockups).
   */
  links: LinkButton[];
}

export interface PortfolioSection extends Section {
  /**
   * List of your projects in a chronological order. Start with the most recent one.
   */
  projects: Project[];
}
