import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Edwin Peñalba',
  role: 'Senior .NET Developer',
  details: [
    { label: 'Phone', value: '+507 61090560' },
    { label: 'Email', value: 'epenalbadev@hotmail.com' },
    { label: 'From', value: 'Panamá, Panamá' },
    { label: 'Salary range', value: '40 000 - 50 000 $' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+507 61090560' },
    { label: 'Email', value: 'epenalbadev@hotmail.com' },
    { label: 'LinkedIn', value: '/in/Edwin_Penalba', url: 'https://linkedin.com/in/edwinpenalba' },
    { label: 'GitHub', value: '/Edwin_Penalba', url: 'https://github.com/EpenalbaDev' },
    { label: 'Website', value: 'Edwin_Penalba-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'I am a full stack developer with experience creating end-to-end web applications, from planning and design to implementation and maintenance. I am passionate about creating technological solutions to solve complex problems and improve the user experience. As a full stack developer, I have worked with a variety of technologies, including programming languages like **JavaScript**, **C#**, **ajax**, **.NET** and popular frameworks such as EntityFramework and Boostrap. Additionally, I have experience with both relational and non-relational databases, as well as implementing APIs and web services.',
     
  tags: [{ name: 'Open for freelance' }, { name: 'Available for Project' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Edwin_Penalba.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: 'https://github.com/EpenalbaDev' }), linkedin({ url: 'https://linkedin.com/in/edwinpenalba' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
