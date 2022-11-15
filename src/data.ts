import type { Data } from '@/types/data';

const data: Data = {
  i18n: {
    locale: 'en-US',
    translations: {
      now: 'now',
    },
  },
  seo: {
    title: 'Mark Freeman - Senior React Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
  },
  main: {
    config: {
      icon: 'fa6-solid:user',
      title: 'Profile',
    },
    image: import('@/assets/my-image.jpeg'),
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
      {
        title: 'I want to learn',
        skills: [
          {
            icon: 'simple-icons:apollographql',
            iconColor: '#311C87',
            name: 'Apollo GraphQL',
          },
          {
            icon: 'simple-icons:astro',
            iconColor: '#FF5D01',
            name: 'Astro',
          },
          {
            icon: 'simple-icons:supabase',
            iconColor: '#3ECF8E',
            name: 'Supabase',
          },
          {
            icon: 'simple-icons:cypress',
            iconColor: '#17202C',
            name: 'Cypress',
          },
        ],
      },
      {
        title: 'I speak',
        skills: [
          {
            icon: 'circle-flags:pl',
            name: 'Polish - native',
          },
          {
            icon: 'circle-flags:us',
            name: 'English - C1',
          },
          {
            icon: 'circle-flags:es-variant',
            name: 'Spanish - B1',
          },
        ],
      },
    ],
  },
  experience: {
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
  },
  portfolio: {
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
        socials: [
          { name: 'Mockups', icon: 'fa6-solid:image', url: '#' },
          { name: 'App demo', icon: 'fa6-solid:desktop', url: '#' },
        ],
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
        socials: [
          { name: 'Mockups', icon: 'fa6-solid:image', url: '#' },
          { name: 'App demo', icon: 'fa6-solid:desktop', url: '#' },
        ],
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
        socials: [
          { name: 'Website', icon: 'fa6-solid:globe', url: '#' },
          { name: 'GitHub', icon: 'fa6-brands:github', url: '#' },
        ],
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
        socials: [{ name: 'Mockups', icon: 'fa6-solid:image', url: '#' }],
      },
    ],
  },
  testimonials: {
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
        socials: [
          { name: 'GitHub', icon: 'fa6-brands:github', url: '#' },
          { name: 'LinkedIn', icon: 'fa6-brands:linkedin-in', url: '#' },
        ],
      },
      {
        image: import('@/assets/testimonials/testimonial-2.jpeg'),
        author: 'Jean Richards',
        relation: 'My project manager at GitLab',
        content:
          'Praesent nec congue elit. Vestibulum lobortis congue ipsum, a gravida mi tempus ac. Mauris aliquet purus nibh, vel varius turpis tempus non. Nullam eget ultricies orci. Quisque nulla ante, auctor eget varius ac, imperdiet nec magna.',
        socials: [{ name: 'LinkedIn', icon: 'fa6-brands:linkedin-in', url: '#' }],
      },
      {
        image: import('@/assets/testimonials/testimonial-3.jpeg'),
        author: 'Jason Fisher',
        relation: 'My customer for sidewing.com website',
        content:
          'Mauris tincidunt at purus vehicula porta. Mauris eget mollis turpis. Sed iaculis rutrum pharetra. Vivamus risus quam, suscipit et semper ut, aliquet ut tellus. Donec quis auctor nunc.',
        socials: [
          { name: 'GitHub', icon: 'fa6-brands:github', url: '#' },
          { name: 'Website', icon: 'fa6-solid:globe', url: '#' },
        ],
      },
    ],
  },
  favorites: {
    config: {
      title: 'My favorites',
      icon: 'fa6-solid:star',
    },
    books: {
      title: 'Books I read',
      data: [
        {
          cover: import('@/assets/favorites/books/book-1.jpeg'),
          title: 'The Pragmatic Programmer: From Journeyman to Master',
          author: 'Andy Hunt, Dave Thomas',
          url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
        },
        {
          cover: import('@/assets/favorites/books/book-2.jpeg'),
          title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
          author: 'Eric Evans',
          url: 'https://www.goodreads.com/book/show/179133.Domain_Driven_Design',
        },
        {
          cover: import('@/assets/favorites/books/book-3.jpeg'),
          title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
          author: 'Robert C. Martin',
          url: 'https://www.goodreads.com/book/show/3735293-clean-code',
        },
        {
          cover: import('@/assets/favorites/books/book-4.jpeg'),
          title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
          author: 'Robert C. Martin',
          url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
        },
      ],
    },
    people: {
      title: 'People I learn from',
      data: [
        {
          image: import('@/assets/favorites/people/person-1.jpg'),
          name: 'Kent C. Dodds',
          url: 'https://kentcdodds.com/',
        },
        {
          image: import('@/assets/favorites/people/person-2.jpeg'),
          name: 'Kent Beck',
          url: 'https://www.kentbeck.com/',
        },
        {
          image: import('@/assets/favorites/people/person-3.jpeg'),
          name: 'Eric Evans',
          url: 'https://www.domainlanguage.com/',
        },
        {
          image: import('@/assets/favorites/people/person-4.jpeg'),
          name: 'Martin Fowler',
          url: 'https://martinfowler.com/',
        },
        {
          image: import('@/assets/favorites/people/person-5.jpg'),
          name: 'Robert C. Martin',
          url: 'http://cleancoder.com/',
        },
        {
          image: import('@/assets/favorites/people/person-6.jpeg'),
          name: 'Adam Dymitruk',
          url: 'https://eventmodeling.org/',
        },
      ],
    },
    videos: {
      title: 'Videos I watched',
      data: [
        {
          thumbnail: import('@/assets/favorites/videos/video-1.jpeg'),
          title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
          url: 'https://youtu.be/TqfbAXCCVwE',
        },
        {
          thumbnail: import('@/assets/favorites/videos/video-2.jpeg'),
          title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
          url: 'https://youtu.be/FS1mnISoG7U',
        },
        {
          thumbnail: import('@/assets/favorites/videos/video-3.jpeg'),
          title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
          url: 'https://youtu.be/QyJZzq0v7Z4',
        },
      ],
    },
    medias: {
      title: 'Media I follow',
      data: [
        {
          image: import('@/assets/favorites/media/media-1.jpeg'),
          title: 'Fireship.io',
          type: 'YouTube channel',
          url: 'https://www.youtube.com/c/Fireship',
        },
        {
          image: import('@/assets/favorites/media/media-2.jpeg'),
          title: 'Healthy Software Developer',
          type: 'YouTube channel',
          url: 'https://www.youtube.com/channel/UCfe_znKY1ukrqlGActlFmaQ',
        },
        {
          image: import('@/assets/favorites/media/media-3.png'),
          title: 'Bytes',
          type: 'Newsletter',
          url: 'https://bytes.dev/',
        },
        {
          image: import('@/assets/favorites/media/media-4.png'),
          title: 'TypeScript Weekly',
          type: 'Newsletter',
          url: 'https://typescript-weekly.com/',
        },
        {
          image: import('@/assets/favorites/media/media-5.jpeg'),
          title: 'Front End Happy Hour',
          type: 'Podcast',
          url: 'https://www.frontendhappyhour.com/',
        },
        {
          image: import('@/assets/favorites/media/media-6.webp'),
          title: '.cult by Honeypot',
          type: 'Blog',
          url: 'https://cult.honeypot.io/',
        },
      ],
    },
  },
};

export default data;
