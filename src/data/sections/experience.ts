import type { ExperienceSection } from '@/types/experience-section';

const experienceData: ExperienceSection = {
  config: {
    title: 'Work experience',
    icon: 'fa6-solid:suitcase',
  },
  jobs: [
    {
      role: 'Senior front-end developer',
      company: 'Google',
      startDate: new Date('2020-02'),
      endDate: null,
      description: [
        'In tristique vulputate augue vel egestas.',
        'Quisque ac imperdiet tortor, at lacinia ex.',
        'Duis vel ex hendrerit, commodo odio sed, aliquam enim.',
        'Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.',
        'Nunc malesuada leo et est iaculis facilisis.',
        'Fusce eu urna ut magna malesuada fringilla.',
      ],
      tags: [
        {
          icon: 'simple-icons:react',
          iconColor: '#61DAFB',
          name: 'React.js',
          url: 'https://reactjs.org/',
        },
        {
          icon: 'simple-icons:nextdotjs',
          iconColor: '#000000',
          name: 'Next.js',
          url: 'https://nextjs.org/',
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
          icon: 'simple-icons:firebase',
          iconColor: '#FFCA28',
          name: 'Firebase',
          url: 'https://firebase.google.com/',
        },
      ],
      socials: [
        { name: 'Facebook', icon: 'fa6-brands:facebook-f', url: '#' },
        { name: 'LinkedIn', icon: 'fa6-brands:linkedin-in', url: '#' },
      ],
    },
    {
      role: 'React.js developer',
      company: 'Facebook',
      startDate: new Date('2019-04'),
      endDate: new Date('2020-02'),
      description: [
        'Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.',
        'Ut posuere massa lacus, eleifend molestie tortor auctor vel.',
        'Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.',
        'Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.',
      ],
      tags: [
        {
          icon: 'simple-icons:react',
          iconColor: '#61DAFB',
          name: 'React.js',
          url: 'https://reactjs.org/',
        },
        {
          icon: 'simple-icons:reactquery',
          iconColor: '#FF4154',
          name: 'TanStack Query',
          url: 'https://tanstack.com/query',
        },
        {
          icon: 'simple-icons:chakraui',
          iconColor: '#319795',
          name: 'Chakra UI',
          url: 'https://chakra-ui.com/',
        },
        {
          icon: 'simple-icons:eslint',
          iconColor: '#4B32C3',
          name: 'ESLint',
          url: 'https://eslint.org/',
        },
      ],
      socials: [
        { name: 'Website', icon: 'fa6-solid:globe', url: '#' },
        { name: 'Instagram', icon: 'fa6-brands:instagram', url: '#' },
      ],
    },
    {
      role: 'Junior front-end developer',
      company: 'GitLab',
      startDate: new Date('2016-09'),
      endDate: new Date('2019-04'),
      description: [
        'Nulla volutpat justo ante, rhoncus posuere massa egestas in.',
        'Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.',
        'Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.',
        'Donec non vulputate augue.',
      ],
      tags: [
        {
          icon: 'simple-icons:vuedotjs',
          iconColor: '#4FC08D',
          name: 'Vue.js',
          url: 'https://vuejs.org/',
        },
        {
          icon: 'simple-icons:tailwindcss',
          iconColor: '#06B6D4',
          name: 'Tailwind CSS',
          url: 'https://tailwindcss.com/',
        },
        {
          icon: 'simple-icons:pnpm',
          iconColor: '#F69220',
          name: 'pnpm',
          url: 'https://pnpm.io/',
        },
      ],
      socials: [
        { name: 'Twitter', icon: 'fa6-brands:twitter', url: '#' },
        { name: 'GitHub', icon: 'fa6-brands:github', url: '#' },
      ],
    },
  ],
};

export default experienceData;
