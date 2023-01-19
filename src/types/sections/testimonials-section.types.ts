import type { Photo, LinkButton, Section } from '../shared';

export type Testimonial = Readonly<{
  image: Photo;
  author: string;
  relation: string;
  content: string;
  links: Readonly<LinkButton[]>;
}>;

export interface TestimonialsSection extends Section {
  readonly testimonials: Readonly<Testimonial[]>;
}
