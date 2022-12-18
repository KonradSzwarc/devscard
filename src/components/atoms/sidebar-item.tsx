import { useLocation } from 'react-use';

import Icon from '@/atoms/icon';
import type { Section } from '@/types/data';
import type { IconName } from '@/types/icon';

import Tooltip from './tooltip';

export interface SidebarItemProps {
  section: Section;
  icon: IconName;
  title?: string;
}

export const MAIN_SECTION: Section = 'main';

const classes = /* tw */ {
  main: 'inline-flex h-10 w-10 items-center justify-center rounded-lg transition',
  active: 'bg-primary-600 text-white',
  inactive: 'bg-white text-gray-400 hover:bg-primary-600 hover:text-white dark:bg-gray-800 dark:text-gray-200',
};

const SidebarItem = ({ section, icon, title = '' }: SidebarItemProps) => {
  const { hash } = useLocation();
  const href = `#${section}`;

  const active = hash === '' ? section === MAIN_SECTION : hash === href;

  return (
    <Tooltip content={`${title || section.charAt(0).toUpperCase() + section.slice(1)}`} placement="left">
      <a
        href={href}
        className={`${classes.main} ${active ? classes.active : classes.inactive}`}
        aria-current={active ? 'page' : undefined}
        aria-label={`${section} section`}
      >
        <Icon name={icon} size={20} />
      </a>
    </Tooltip>
  );
};

export default SidebarItem;
