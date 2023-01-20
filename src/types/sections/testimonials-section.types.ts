import type { Photo, LinkButton, Section } from '../shared';

export interface Testimonial {
  image: Photo;
  author: string;
  relation: string;
  content: string;
  links: LinkButton[];
}

export interface TestimonialsSection extends Section {
  testimonials: Testimonial[];
}
