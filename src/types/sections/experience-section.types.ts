import type { DateRange, Description, LinkButton, Section, TagsList } from '../shared';

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
   * Date range when you were working in the company.
   */
  dates: DateRange;

  /**
   * A short overview of your job. You can write it as a paragraph (string) or as a list of bullet points (string[]).
   */
  description: Description;

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
