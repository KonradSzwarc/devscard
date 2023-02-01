import type { DateRange, LinkButton, Photo, Section, TagsList } from '../shared';

export interface Job {
  /**
   * Your position in the company.
   */
  role: string;

  /**
   * Name of the company.
   */
  company: string;

  /**
   * [WEB] Logo of the company.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 56x56px
   */
  image?: Photo;

  /**
   * Date range when you were working in the company.
   */
  dates: DateRange;

  /**
   * A short overview of your job. You can use markdown syntax.
   */
  description: string;

  /**
   * Any information that you want to highlight.
   * We recommend to describe the technologies used in the project.
   */
  tagsList: TagsList;

  /**
   * [WEB] Links related to your job (e.g. production app, company's website, project website).
   */
  links: LinkButton[];
}

export interface ExperienceSection extends Section {
  /**
   * List of your jobs in a chronological order. Start with the most recent one.
   */
  jobs: Job[];
}
