import type { DateRange, LinkButton, Photo, Section } from '../shared';

export interface Diploma {
  /**
   * Name of the certificate or the degree you got.
   */
  title: string;

  /**
   * Name of the institution that issued the certificate or degree.
   */
  institution: string;

  /**
   * [WEB] Logo of the institution.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 56x56px
   */
  image?: Photo;

  /**
   * Date range when you were studying in the institution.
   */
  dates: DateRange;

  /**
   * A short overview of your studies. You can use markdown syntax.
   */
  description: string;

  /**
   * [WEB] Links related to your studies (e.g. course/university website, link to realized project).
   */
  links: LinkButton[];
}

export interface EducationSection extends Section {
  /**
   * List of your diplomas, certificates, .etc. Start with the most recent one.
   */
  diplomas: Diploma[];
}
