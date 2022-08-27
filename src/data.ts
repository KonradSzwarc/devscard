import myImage from '@/assets/my-image.jpeg';
import type { Data } from '@/types/data';

export const data: Data = {
  seo: {
    title: 'Mark Freeman - Senior React Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales ac dui at vestibulum. In condimentum metus id dui tincidunt, in blandit mi vehicula.',
  },
  main: {
    config: {
      icon: '',
    },
    image: { src: myImage, alt: 'Mark Freeman picture' },
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
      href: '#',
    },
    socials: [],
  },
};
