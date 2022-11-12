import type { IconProps } from './icon';
import Icon from './icon';
import Tooltip, { TooltipProps } from './tooltip';

type Props = IconProps & Omit<TooltipProps, 'children'>;

const IconWithTooltip = ({ name, color, size, ...tooltipProps }: Props) => (
  <Tooltip {...tooltipProps}>
    <div>
      <Icon name={name} color={color} size={size} />
    </div>
  </Tooltip>
);

export default IconWithTooltip;
