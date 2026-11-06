import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, telegram } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Arshia Soori',
  role: 'Senior Python and AI Engineer',
  details: [
    { label: 'Phone', value: '+98 913 563 5155', url: 'tel:+98 913 563 5155' },
    { label: 'Email', value: 'arshiasoori2000@gmail.com', url: 'mailto:arshiasoori2000@gmail.com' },
    { label: 'From', value: 'Tehran, Iran' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+98 913 563 5155' },
    { label: 'Email', value: 'arshiasoori2000@gmail.com' },
    { label: 'LinkedIn', value: '/in/arshia-soori', url: 'https://linkedin.com/in/arshia-soori' },
    { label: 'GitHub', value: '/CaptainArshia', url: 'https://github.com/CaptainArshia' },
    { label: 'Website', value: 'https://arshiasoori.vercel.app/', url: 'https://arshiasoori.vercel.app/', fullRow: true },
  ],
  description:
    "**Senior Python and AI engineer**, passionate about building AI-powered products and leading engineering teams. Excellent problem-solving skills and a track record of turning complex data into meaningful, production-ready systems. Looking to take on new challenges and keep growing as an engineer and technical leader.",
  tags: [{ name: 'Open for new adventures' }, { name: 'AI & LLM specialist' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Arshia_Soori.pdf',
  },
  links: [
    github({ url: '/CaptainArshia' }), 
    linkedin({ url: '/in/arshia-soori' }), 
    telegram({ url: 'http://t.me/noun8' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
