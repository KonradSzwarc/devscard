import { Icon as IconComponent } from '@iconify-icon/react';

import type { IconName } from '@/types/icon';

export interface IconProps {
  name?: IconName;
  color?: string;
  size: number;
}

const Icon = ({ name = undefined, color = undefined, size }: IconProps) =>
  name ? <IconComponent icon={name} width={size} height={size} style={{ color }} /> : null;

export default Icon;
