import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import { demo, github, mockups, website } from '../helpers/links';
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
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
  },
  projects: [
    {
      name: 'Golden Bulls',
      image: import('@/assets/portfolio/project-1.jpeg'),
      dates: [new Date('2020-03'), null],
      details: [
        { label: 'Team size', value: '1 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      description:
        'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
      tagsList: {
        title: 'Technologies',
        tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
      },
      links: [mockups('#'), demo('#')],
    },
    {
      name: 'TruQuest',
      image: import('@/assets/portfolio/project-2.jpeg'),
      dates: [new Date('2019-06'), new Date('2020-02')],
      details: [
        { label: 'Team size', value: '7 people' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Company', value: 'Facebook' },
        { label: 'Category', value: ['Web app', 'Mobile app'] },
      ],
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), nestJs(), postgreSql()],
      },
      links: [mockups('#'), demo('#')],
    },
    {
      name: 'Software Chasers',
      image: import('@/assets/portfolio/project-3.jpeg'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      description:
        'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
      tagsList: {
        title: 'Technologies',
        tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
      },
      links: [website('#'), github('#')],
    },
    {
      name: 'Disco Ninjas',
      image: import('@/assets/portfolio/project-4.jpeg'),
      dates: [new Date('2016-05'), new Date('2018-07')],
      details: [
        { label: 'Team size', value: '11 people' },
        { label: 'My role', value: 'Front-end Developer' },
        { label: 'Company', value: 'Google' },
        { label: 'Category', value: ['Mobile app', 'Open source'] },
      ],
      description:
        'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), jest(), firebase()],
      },
      links: [mockups('#'), github('#')],
    },
  ],
} as const satisfies PortfolioSection;

export default portfolioSectionData;
