import type { TestimonialsSection } from '@/types/testimonials-section';

import getSocial from '../socials';

const testimonialsData: TestimonialsSection = {
  config: {
    title: 'Testimonials',
    icon: 'fa6-solid:comment',
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/testimonial-1.jpeg'),
      author: 'Howard Stewart',
      relation: 'We work together as front-end developers at Google',
      content:
        'In nec mattis sem. Morbi purus lorem, euismod ac varius at, aliquet vitae augue. Pellentesque ut facilisis felis. In sed dui blandit, aliquet odio eu, elementum leo. In facilisis dapibus tortor ac volutpat. Cras cursus nec odio maximus elementum.',
      socials: [getSocial('github', '#'), getSocial('linkedin', '#')],
    },
    {
      image: import('@/assets/testimonials/testimonial-2.jpeg'),
      author: 'Jean Richards',
      relation: 'My project manager at GitLab',
      content:
        'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.',
      socials: [getSocial('linkedin', '#')],
    },
    {
      image: import('@/assets/testimonials/testimonial-3.jpeg'),
      author: 'Jason Fisher',
      relation: 'My customer for sidewing.com website',
      content:
        'Mauris tincidunt at purus vehicula porta. Mauris eget mollis turpis. Sed iaculis rutrum pharetra. Vivamus risus quam, suscipit et semper ut, aliquet ut tellus. Donec quis auctor nunc.',
      socials: [getSocial('github', '#'), getSocial('website', '#')],
    },
  ],
};

export default testimonialsData;
