import type { LocalImage, SectionConfig, Social } from './common';

interface Testimonial {
  image: LocalImage;
  author: string;
  relation: string;
  content: string;
  socials: Social[];
}

export interface TestimonialsSection {
  testimonials: Testimonial[];
  config: SectionConfig;
}
