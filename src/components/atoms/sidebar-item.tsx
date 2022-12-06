import { useLocation } from 'react-use';

import Icon from '@/atoms/icon';
import { MAIN_SECTION } from '@/constants/section';
import type { Section } from '@/types/data';
import type { IconName } from '@/types/icon';

import Tooltip from './tooltip';

export interface SidebarItemProps {
  section: Section;
  icon: IconName;
  title?: string;
}

const SidebarItem = ({ section, icon, title = '' }: SidebarItemProps) => {
  const { hash } = useLocation();
  const href = `#${section}`;

  const active = hash === '' ? section === MAIN_SECTION : hash === href;

  return (
    <Tooltip content={`${title || section.charAt(0).toUpperCase() + section.slice(1)} section`} placement="left">
      <a
        href={href}
        className={`inline-flex justify-center items-center h-10 w-10 rounded-lg transition
        ${
          active
            ? 'bg-primary-600 text-white'
            : 'bg-white text-gray-400 dark:bg-gray-800 dark:text-gray-200 hover:bg-primary-600 hover:text-white'
        }
        `}
        aria-current={active ? 'page' : undefined}
        aria-label={`${section} section`}
      >
        <Icon name={icon} size={20} />
      </a>
    </Tooltip>
  );
};

export default SidebarItem;
