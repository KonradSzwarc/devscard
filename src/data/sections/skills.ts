import type { SkillsSection } from '@/types/skills-section';

import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
} from '../skills';

const skillsData: SkillsSection = {
  config: {
    title: 'Skills',
    icon: 'fa6-solid:bars-progress',
  },
  skillSets: [
    {
      title: 'I already know',
      pdfTitle: 'Technologies',
      skills: [
        react({
          level: 5,
          description:
            'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        typescript({
          level: 4,
          description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        }),
        sass({
          level: 4,
          description: 'Nulla interdum pellentesque ultricies. Ut id eros commodo, ultrices ligula eu, elementum ante.',
        }),
        chakraUi({ level: 5 }),
        tailwindCss({ level: 2 }),
        prettier({ level: 5 }),
        eslint({
          level: 4,
          description:
            'Nulla tempor turpis at vehicula pharetra. Vestibulum tellus tortor, commodo et suscipit id, lobortis id nunc.',
        }),
        nestJs({
          level: 2,
          description:
            'Praesent feugiat ultricies iaculis. In posuere vehicula odio, sed consequat velit porta viverra.',
        }),
        postgreSql({ level: 2 }),
        mongoDb({ level: 1 }),
        firebase({ level: 1 }),
        pnpm({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      excludeFromPdf: true,
      skills: [apolloGraphql(), astro(), supabase(), cypress()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - B1' },
      ],
    },
  ],
};

export default skillsData;
