import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {

  SQL,
  JavaScript,
  typescript,
  Net,
  Api,
  Azure,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Programming Manager',
      company: 'SUCRE ARIAS & REYES',
      image: import('@/assets/logos/SarLogo.png'),
      dates: [new Date('2022-08'), null],
      description: `
        - Serve in a project lead role on selected multiple projects..
        - Reviews and ensures adherence to departmental working practice documents and SOPs and contributes to their development.
        - Monitors and ensures adherence to contractual obligations or limits with our clients.
        - Works directly with project team leaders and client representatives to assess and develop project goals and timelines.
        - Provides general infrastructure support to the department. Examples include giving presentations at department meetings, contributing to documents or policies, contributing to and/or leading process improvement initiatives, and assisting with departmental web page development.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [Net(), JavaScript(), typescript(), Api(), Azure(), SQL()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Senior Full Stack Developer',
      company: 'SUCRE ARIAS & REYES',
      image: import('@/assets/logos/SarLogo.png'),
      dates: [new Date('2018-03'), new Date('2022-08')],
      description: `
      - Web applications development.
      - Development Web pages.
      - Creation of console applications.
      - Creation of Reporting Service.
      - Maintenance of the Aderant application.
      - Creation of HotDocs templates.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [Net(), JavaScript(), typescript(), Api(), SQL()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'Grupo Primavera Holding',
      image: import('@/assets/logos/Gprimavera.png'),
      dates: [new Date('2016-09'), new Date('2019-04')],
      description: `
        These are some of the tasks performed:

        - Web applications development.
        - Creation of console applications.
        - Creation of Data base.

        Improvements in work processes by implementing technological tools. 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [Net(), JavaScript(), SQL()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
