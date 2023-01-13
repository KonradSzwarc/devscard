import Tippy, { TippyProps } from '@tippyjs/react/headless';
import type { ReactElement } from 'react';

export interface TooltipProps {
  children: ReactElement;
  content: string;
  placement?: TippyProps['placement'];
}

const Tooltip = ({ children, content, placement = 'top' }: TooltipProps) => (
  <Tippy
    render={(attrs) => (
      <div
        {...attrs}
        className="max-w-[95%]  rounded-lg bg-gray-700 px-2 py-1.5 text-white dark:bg-gray-100 dark:text-gray-800 sm:max-w-xs"
      >
        {content}
      </div>
    )}
    placement={placement}
  >
    {children}
  </Tippy>
);

export default Tooltip;
