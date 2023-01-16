import type { Photo, SectionConfig, Social } from './common';

export interface Testimonial {
  image: Photo;
  author: string;
  relation: string;
  content: string;
  socials: Social[];
}

export interface TestimonialsSection {
  testimonials: Testimonial[];
  config: SectionConfig;
}
