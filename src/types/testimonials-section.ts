import type { Image, SectionConfig, Social } from './common';

export interface Testimonial {
  image: Image;
  author: string;
  relation: string;
  content: string;
  socials: Social[];
}

export interface TestimonialsSection {
  testimonials: Testimonial[];
  config: SectionConfig;
}
