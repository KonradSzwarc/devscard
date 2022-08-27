import type { SectionConfig } from './common';

interface Testimonial {
  image: string;
  author: string;
  relation: string;
  content: string;
}

export interface TestimonialsSection {
  testimonials: Testimonial[];
  config: SectionConfig;
}
