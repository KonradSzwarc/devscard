import { Icon as IconComponent } from '@iconify-icon/react';

import type { IconName } from '@/types/icon';

export interface IconProps {
  name?: IconName;
  color?: string;
  size: number;
  url?: string;
}

const BaseIcon = ({ name = undefined, color = undefined, size }: Omit<IconProps, 'url'>) =>
  name ? <IconComponent icon={name} width={size} height={size} style={{ color }} /> : null;

const Icon = ({ url = undefined, ...baseIconProps }: IconProps) => {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        <BaseIcon {...baseIconProps} />
      </a>
    );
  }

  return <BaseIcon {...baseIconProps} />;
};

export default Icon;
