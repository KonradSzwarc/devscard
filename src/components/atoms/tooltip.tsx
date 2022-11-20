import Tippy, { TippyProps } from '@tippyjs/react/headless';
import type { ReactElement } from 'react';

export interface TooltipProps {
  children: ReactElement;
  content: string;
  placement?: TippyProps['placement'];
}

const Tooltip = ({ children, content, placement = 'top' }: TooltipProps) => {
  return (
    <Tippy
      render={(attrs) => (
        <div {...attrs} className="bg-gray-700 rounded-lg px-2 py-1.5 text-white max-w-[95%] sm:max-w-xs">
          {content}
        </div>
      )}
      placement={placement}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
