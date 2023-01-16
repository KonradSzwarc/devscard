import type { EducationSection } from '@/types/education-section';

import { website } from '../socials';

const educationData: EducationSection = {
  config: {
    title: 'Education',
    icon: 'fa6-solid:graduation-cap',
  },
  educationItems: [
    {
      title: 'Information Technology',
      institution: 'Wrocław University of Science and Technology',
      startDate: new Date('2014.10'),
      endDate: new Date('2016.07'),
      description: 'Master degree. Specialization in software development.',
      socials: [website('#')],
    },
    {
      title: 'Information Technology',
      institution: 'Wrocław University of Science and Technology',
      startDate: new Date('2011.10'),
      endDate: new Date('2014.07'),
      description: "Bachelor's degree. Specialization in application development.",
      socials: [website('#')],
    },
  ],
};

export default educationData;
