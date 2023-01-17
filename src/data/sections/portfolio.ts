import type { PortfolioSection } from '@/types/portfolio-section';

import {
  chakraUi,
  eslint,
  firebase,
  jest,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  tailwindCss,
  typescript,
} from '../skills';
import { demo, github, mockups, website } from '../socials';

const portfolioData: PortfolioSection = {
  config: {
    title: 'Projects',
    icon: 'fa6-solid:rocket',
  },
  projects: [
    {
      name: 'Golden Bulls',
      image: import('@/assets/portfolio/project-1.jpeg'),
      startDate: new Date('2020-03'),
      endDate: null,
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      description:
        'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
      tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
      socials: [mockups('#'), demo('#')],
    },
    {
      name: 'TruQuest',
      image: import('@/assets/portfolio/project-2.jpeg'),
      startDate: new Date('2019-06'),
      endDate: new Date('2020-02'),
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://tru-quest-ck7ea3.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/tru-quest', url: '#' },
      ],
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tags: [react(), tailwindCss(), nestJs(), postgreSql()],
      socials: [mockups('#'), demo('#')],
    },
    {
      name: 'Software Chasers',
      image: import('@/assets/portfolio/project-3.jpeg'),
      startDate: new Date('2018-01'),
      endDate: new Date('2020-12'),
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
      ],
      description:
        'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
      tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
      socials: [website('#'), github('#')],
    },
    {
      name: 'Disco Ninjas',
      image: import('@/assets/portfolio/project-4.jpeg'),
      startDate: new Date('2016-05'),
      endDate: new Date('2018-07'),
      details: [
        { label: 'Team size', value: '11 people' },
        { label: 'My role', value: 'Front-end Developer' },
        { label: 'Company', value: 'Google' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
      ],
      description:
        'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
      tags: [typescript(), jest(), firebase()],
      socials: [mockups('#'), github('#')],
    },
  ],
};

export default portfolioData;
