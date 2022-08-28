import myImage from '@/assets/my-image.jpeg';
import type { Data } from '@/types/data';

const data: Data = {
  seo: {
    title: 'Mark Freeman - Senior React Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
  },
  main: {
    config: {
      icon: 'fa6-solid:user',
    },
    image: { src: myImage, alt: 'Mark Freeman picture' },
    fullName: 'Mark Freeman',
    role: 'Senior React Developer',
    details: [
      { label: 'Phone', value: '+48 604 343 212' },
      { label: 'Email', value: 'veeeery.long.email.address@gmail.com' },
      { label: 'From', value: 'Warsaw, Poland' },
      { label: 'Salary range', value: '18 000 - 25 000 PLN' },
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula. Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
    tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
    action: {
      label: 'Download CV',
      url: '#',
    },
    socials: [
      { name: 'Facebook', icon: 'fa6-brands:facebook-f', url: '#' },
      { name: 'GitHub', icon: 'fa6-brands:github', url: '#' },
      { name: 'LinkedIn', icon: 'fa6-brands:linkedin-in', url: '#' },
      { name: 'Twitter', icon: 'fa6-brands:twitter', url: '#' },
    ],
  },
  skills: {
    config: {
      title: 'Skills',
      icon: 'fa6-solid:bars-progress',
    },
    skillSets: [
      {
        title: 'I already know',
        skills: [
          {
            icon: 'simple-icons:react',
            iconColor: '#61DAFB',
            name: 'React.js',
            level: 5,
            url: 'https://reactjs.org/',
            description:
              'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
          },
          {
            icon: 'simple-icons:typescript',
            iconColor: '#3178C6',
            name: 'TypeScript',
            level: 4,
            url: 'https://www.typescriptlang.org/',
            description:
              'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
          },
          {
            icon: 'simple-icons:sass',
            iconColor: '#CC6699',
            name: 'SASS',
            level: 4,
            url: 'https://sass-lang.com/',
            description:
              'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
          },
          {
            icon: 'simple-icons:chakraui',
            iconColor: '#319795',
            name: 'Chakra UI',
            level: 5,
            url: 'https://chakra-ui.com/',
          },
          {
            icon: 'simple-icons:tailwindcss',
            iconColor: '#06B6D4',
            name: 'Tailwind CSS',
            level: 2,
            url: 'https://tailwindcss.com/',
          },
          {
            icon: 'simple-icons:prettier',
            iconColor: '#F7B93E',
            name: 'Prettier',
            level: 5,
            url: 'https://prettier.io/',
          },
          {
            icon: 'simple-icons:eslint',
            iconColor: '#4B32C3',
            name: 'ESLint',
            level: 4,
            url: 'https://eslint.org/',
            description:
              'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
          },
          {
            icon: 'simple-icons:nestjs',
            iconColor: '#E0234E',
            name: 'NestJS',
            level: 2,
            url: 'https://nestjs.com/',
            description:
              'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
          },
          {
            icon: 'simple-icons:postgresql',
            iconColor: '#4169E1',
            name: 'PostgreSQL',
            level: 2,
            url: 'https://www.postgresql.org/',
          },
          {
            icon: 'simple-icons:mongodb',
            iconColor: '#47A248',
            name: 'MongoDB',
            level: 1,
            url: 'https://www.mongodb.com/',
          },
          {
            icon: 'simple-icons:firebase',
            iconColor: '#FFCA28',
            name: 'Firebase',
            level: 1,
            url: 'https://firebase.google.com/',
          },
          {
            icon: 'simple-icons:pnpm',
            iconColor: '#F69220',
            name: 'pnpm',
            level: 3,
            url: 'https://pnpm.io/',
          },
        ],
      },
    ],
  },
};

export default data;
