import { Icon as IconComponent } from '@iconify-icon/react';

export interface IconProps {
  name?: string;
  color?: string;
  size: number;
}

const Icon = ({ name = undefined, color = undefined, size }: IconProps) =>
  name ? <IconComponent icon={name} width={size} height={size} style={{ color }} /> : null;

export default Icon;
