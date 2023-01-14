import type { ExperienceSection } from '@/types/experience-section';

import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
} from '../skills';
import { facebook, github, instagram, linkedin, twitter, website } from '../socials';

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
      tags: [react(), nextJs(), typescript(), nx(), firebase()],
      socials: [facebook('#'), linkedin('#')],
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
      tags: [react(), reactQuery(), chakraUi(), eslint()],
      socials: [website('#'), instagram('#')],
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
      tags: [vue(), tailwindCss(), pnpm()],
      socials: [twitter('#'), github('#')],
    },
  ],
};

export default experienceData;
