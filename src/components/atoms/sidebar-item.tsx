import data from 'src/data';

import SECTION_IDS from '@/constants/sectionIds';
import type { Section } from '@/types/data';

import Icon from './icon';

export interface Props {
  section: Section;
  activeHash: string;
}

const SidebarItem = ({ activeHash, section }: Props) => {
  if (!data[section]) {
    return null;
  }

  const id = SECTION_IDS[section];
  const active = activeHash === id;

  return (
    <a
      href={`#${id}`}
      className={`inline-flex justify-center items-center h-10 w-10 rounded-lg transition
        ${active ? 'bg-primary-600 text-white' : ''}
        ${!active ? 'bg-white text-gray-400 hover:bg-primary-600 hover:text-white' : ''}`}
    >
      <Icon name={data[section]?.config.icon} size={20} />
    </a>
  );
};

export default SidebarItem;
