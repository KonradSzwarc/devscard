import type { LocalImage, SectionConfig } from './common';

interface Testimonial {
  image: LocalImage;
  author: string;
  relation: string;
  content: string;
}

export interface TestimonialsSection {
  testimonials: Testimonial[];
  config: SectionConfig;
}
