import { useHash } from 'react-use';

import type { Section } from '@/types/data';
import type { IconName } from '@/types/icon';

import Icon from './icon';

export interface Props {
  section: Section;
  icon: IconName;
}

const MAIN_SECTION: Section = 'main';

const SidebarItem = ({ section, icon }: Props) => {
  const [hash] = useHash();
  const href = `#${section}`;

  const isActive = () => {
    if (hash === '') {
      return section === MAIN_SECTION;
    }

    return hash === href;
  };

  const active = isActive();

  return (
    <a
      href={`#${section}`}
      className={`inline-flex justify-center items-center h-10 w-10 rounded-lg transition
        ${active ? 'bg-primary-600 text-white' : 'bg-white text-gray-400 hover:bg-primary-600 hover:text-white'}
        `}
      aria-current={active ? 'page' : undefined}
    >
      <Icon name={icon} size={20} />
    </a>
  );
};

export default SidebarItem;
