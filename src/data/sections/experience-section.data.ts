import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import {
  bluetooth,
  django,
  gpu,
  huggingFace,
  langChain,
  llamaIndex,
  opencv,
  pydanticAi,
  python,
  pytorch,
  tensorflow,
  wifi,
  yolo,
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
      role: 'CTO',
      company: 'DelBand',
      image: import('@/assets/DelBand.png'),
      dates: [new Date('2026-03'), null],
      description: `
        Iran's first smart health monitoring service, and the first to hold a Med 3.0 license. Owned and operated by Ayandeh Pardaz, backed by MCI's investment fund Harekat Aval, with Hamrahe Aval (MCI) as investor and business partner.

        - Leading the engineering team and owning technical strategy for the company's health monitoring platform.
        - Leading a team dedicated to medical algorithms, turning raw wearable sensor data into meaningful health insights using ML and AI.
        - Directing product and architecture decisions across backend, AI, and infrastructure.
        - Hiring, mentoring, and managing the engineering team.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), django(), langChain(), llamaIndex(), pydanticAi()],
      },
      links: [website({ url: 'https://delbandcare.com/' })],
    },
    {
      role: 'CTO and AI Tech Lead',
      company: 'IndoorA',
      image: import('@/assets/IndoorA.png'),
      dates: [new Date('2022-09'), new Date('2026-02')],
      description: `
        The first indoor positioning and navigation system in the Middle East, owned and operated by Ayandeh Pardaz.

        - Led the engineering team from early product to a knowledge-based positioning and navigation platform.
        - Owned technical strategy, architecture, and hiring for the engineering organization.
        - Led collaborations with MCI, Radin, Tehran International Exhibition Center, Iran Mall, and Mobarakeh Steel Company.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), django(), bluetooth(), wifi(), pytorch(), tensorflow(), huggingFace(), gpu()],
      },
      links: [website({ url: 'https://indoora.net/' })],
    },
    {
      role: 'Tech Lead',
      company: 'Advanced Aerospace Structures Laboratory, K. N. Toosi University of Technology',
      image: import('@/assets/KNTU.png'),
      dates: [new Date('2021-09'), new Date('2022-08')],
      description: `
        Led the development of an intelligent traffic and movement management system combining image processing, CNNs, and language models for entry/exit management, automated door control, guest management, and reporting.

        - Led a team of 7 engineers, setting technical direction and reviewing implementation.
        - Coordinated with university researchers and stakeholders on project scope and delivery.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), opencv(), yolo(), gpu()],
      },
      links: [],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
