import type { MainSection } from '@/types/main-section';

import { facebook, github, linkedin, twitter } from '../socials';

const mainData: MainSection = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
  },
  image: 'https://m.media-amazon.com/images/I/61aFldsgAmL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
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
  socials: [facebook('#'), github('#'), linkedin('#'), twitter('#')],
};

export default mainData;
