import type { Photo, LinkButton, Section } from '../shared';

export interface Testimonial {
  /**
   * [WEB] Photo of the testimonial author.
   *
   * **Ratio**: 1:1
   *
   * **Display size**: 56x56px
   */
  image: Photo;

  /**
   * [WEB] Full name of the testimonial author.
   */
  author: string;

  /**
   * [WEB] Your relation to the testimonial author (e.g. supervisor, colleague, subordinate).
   */
  relation: string;

  /**
   * [WEB] Content of the testimonial. You can use markdown syntax.
   */
  content: string;

  /**
   * [WEB] Social media (e.g. LinkedIn profile, website) of the testimonial author.
   */
  links: LinkButton[];
}

export interface TestimonialsSection extends Section {
  /**
   * [WEB] List of your testimonials in a chronological order. Start with the most recent one.
   */
  testimonials: Testimonial[];
}
