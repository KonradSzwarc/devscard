import type { IconName } from '@/types/icon';

import Icon from './icon';

export interface Props {
  icon: IconName;
  id: string;
  activeHash: string;
}

const SidebarItem = ({ icon, id, activeHash }: Props) => {
  const active = activeHash === id;

  return (
    <a
      href={`#${id}`}
      className={`inline-flex justify-center items-center h-10 w-10 rounded-lg transition
        ${active ? 'bg-primary-600 text-white' : ''}
        ${!active ? 'bg-white text-gray-400 hover:bg-primary-600 hover:text-white' : ''}`}
    >
      <Icon name={icon} size={20} />
    </a>
  );
};

export default SidebarItem;
