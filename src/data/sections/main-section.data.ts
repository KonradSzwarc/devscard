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
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Mark Freeman',
  role: 'Senior React Developer',
  details: [
    { label: 'Phone', value: '605 475 6961', url: 'tel:605 475 6961' },
    { label: 'Email', value: 'mark.freeman.dev@gmail.com', url: 'mailto:mark.freeman.dev@gmail.com' },
    { label: 'From', value: 'Warsaw, Poland' },
    { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '605 475 6961' },
    { label: 'Email', value: 'mark.freeman.dev@gmail.com' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/mark-freeman', url: 'https://github.com' },
    { label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur **adipiscing elit**. In sodales ac dui at *vestibulum*. In condimentum metus id dui tincidunt, in blandit mi [vehicula](/). Nulla lacinia, erat sit amet elementum vulputate, lectus mauris volutpat mi, vitae accumsan metus elit ut nunc. Vestibulum lacinia enim eget eros fermentum scelerisque. Proin augue leo, posuere ut imperdiet vitae, fermentum eu ipsum. Sed sed neque sagittis, posuere urna nec, commodo leo. Pellentesque posuere justo vitae massa volutpat maximus.',
  tags: [{ name: 'Open for freelance' }, { name: 'Available for mentoring' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Mark_Freeman.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
