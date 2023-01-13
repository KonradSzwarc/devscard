import type { PortfolioSection } from '@/types/portfolio-section';

import getSocial from '../socials';

const portfolioData: PortfolioSection = {
  config: {
    title: 'Projects',
    icon: 'fa6-solid:rocket',
    filter: null,
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
      description:
        'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
      tags: [
        {
          icon: 'simple-icons:nextdotjs',
          iconColor: '#000000',
          name: 'Next.js',
          url: 'https://nextjs.org/',
        },
        {
          icon: 'simple-icons:sass',
          iconColor: '#CC6699',
          name: 'SASS',
          url: 'https://sass-lang.com/',
        },
        {
          icon: 'simple-icons:pnpm',
          iconColor: '#F69220',
          name: 'pnpm',
          url: 'https://pnpm.io/',
        },
        {
          icon: 'simple-icons:eslint',
          iconColor: '#4B32C3',
          name: 'ESLint',
          url: 'https://eslint.org/',
        },
        {
          icon: 'simple-icons:prettier',
          iconColor: '#F7B93E',
          name: 'Prettier',
          url: 'https://prettier.io/',
        },
      ],
      socials: [getSocial('mockups', '#'), getSocial('demo', '#')],
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
      description:
        'Ut ultricies tortor at sodales aliquam. Vivamus metus ante, fringilla nec ligula in, suscipit rhoncus mauris. Praesent hendrerit velit odio, at accumsan urna faucibus convallis. Nunc at massa eget ligula volutpat dictum a sit amet libero. Vestibulum iaculis molestie maximus. In hac habitasse platea dictumst.',
      tags: [
        {
          icon: 'simple-icons:react',
          iconColor: '#61DAFB',
          name: 'React.js',
          url: 'https://reactjs.org/',
        },
        {
          icon: 'simple-icons:tailwindcss',
          iconColor: '#06B6D4',
          name: 'Tailwind CSS',
          url: 'https://tailwindcss.com/',
        },
        {
          icon: 'simple-icons:nestjs',
          iconColor: '#E0234E',
          name: 'NestJS',
          url: 'https://nestjs.com/',
        },
        {
          icon: 'simple-icons:postgresql',
          iconColor: '#4169E1',
          name: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
        },
      ],
      socials: [getSocial('mockups', '#'), getSocial('demo', '#')],
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
      description:
        'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
      tags: [
        {
          icon: 'simple-icons:react',
          iconColor: '#61DAFB',
          name: 'React.js',
          url: 'https://reactjs.org/',
        },
        {
          icon: 'simple-icons:chakraui',
          iconColor: '#319795',
          name: 'Chakra UI',
          url: 'https://chakra-ui.com/',
        },
        {
          icon: 'simple-icons:typescript',
          iconColor: '#3178C6',
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
        },
        {
          icon: 'simple-icons:nx',
          iconColor: '#143055',
          name: 'Nx',
          url: 'https://nx.dev/',
        },
        {
          icon: 'simple-icons:pnpm',
          iconColor: '#F69220',
          name: 'pnpm',
          url: 'https://pnpm.io/',
        },
      ],
      socials: [getSocial('website', '#'), getSocial('github', '#')],
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
      description:
        'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
      tags: [
        {
          icon: 'simple-icons:typescript',
          iconColor: '#3178C6',
          name: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
        },
        {
          icon: 'simple-icons:jest',
          iconColor: '#C21325',
          name: 'Jest',
          url: 'https://jestjs.io/',
        },
        {
          icon: 'simple-icons:firebase',
          iconColor: '#FFCA28',
          name: 'Firebase',
          url: 'https://firebase.google.com/',
        },
      ],
      socials: [getSocial('mockups', '#')],
    },
  ],
};

export default portfolioData;
