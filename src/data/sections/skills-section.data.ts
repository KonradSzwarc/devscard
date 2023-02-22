import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  html5,
  astro,
  Css,
  Azure,
  boostrap,
  
  JavaScript,
  Net,
  Api,
  Angular,
   
  SQL,
  react,
  Python,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        Net({
          level: 5,
        }),
        Api({
          level: 4,
        }),
        JavaScript({
          level: 4,
        }),
        SQL({ level: 5 }),
        html5({ level: 4 }),
        Css({ level: 4 }),
        Azure({
          level: 4,
         
         }),
        boostrap({
          level: 4,
 
        }),
 
      ],
    },
    {
      title: 'I want to learn',
      skills: [Angular(), astro(), Python(), react()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English - B1' },
        { icon: 'circle-flags:es-variant', name: 'Spanish - C2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
