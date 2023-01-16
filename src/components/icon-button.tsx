import type { IconName } from '@/types/icon';

import Icon from './icon';
import Tooltip from './tooltip';

type IconButtonSize = 'small' | 'large';

export interface IconButtonProps {
  icon: IconName;
  name: string;
  target?: string;
  href: string;
  size: IconButtonSize;
}

const sizeMap: Record<IconButtonSize, string> = {
  small: 'w-7 h-7',
  large: 'w-9 h-9',
};

const classes = /* tw */ {
  main: 'flex items-center justify-center rounded text-gray-400 bg-gray-100 dark:bg-gray-600 dark:text-gray-200',
  active: 'active:translate-y-px',
  focus: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
};

type Props = IconButtonProps;

const IconButton = ({ name, icon, target = '_blank', href, size }: Props) => (
  <Tooltip content={name} placement="bottom">
    <a
      href={href}
      target={target ?? '_blank'}
      className={`${classes.main} ${classes.active} ${classes.focus} ${sizeMap[size]}`}
      aria-label={name}
    >
      <Icon name={icon} size={16} />
    </a>
  </Tooltip>
);

export default IconButton;
