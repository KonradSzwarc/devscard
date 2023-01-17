import { computePosition, flip, shift, offset, autoUpdate, Placement } from '@floating-ui/dom';
import { nanoid } from 'nanoid';

interface UpdateTooltipOptions {
  element: HTMLElement;
  tooltip: HTMLElement;
  placement: Placement;
}

const tooltipElements = [...document.querySelectorAll('[data-tooltip]')] as HTMLElement[];
const tooltipClass =
  /* tw */ 'absolute top-0 left-0 hidden max-w-sm animate-show rounded-lg bg-gray-700 px-3 py-1 text-white dark:bg-gray-100 dark:text-gray-800 sm:max-w-xs';

const updateTooltip =
  ({ element, tooltip, placement }: UpdateTooltipOptions) =>
  () => {
    computePosition(element, tooltip, { placement, middleware: [offset(8), flip(), shift({ padding: 8 })] }).then(
      ({ x, y }) => {
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      }
    );
  };

const createTooltip = (content: string) => {
  const tooltip = document.createElement('div');

  tooltip.innerText = content;
  tooltip.setAttribute('id', `tooltip-${nanoid(8)}`);
  tooltip.setAttribute('class', tooltipClass);
  tooltip.setAttribute('role', 'tooltip');

  document.body.appendChild(tooltip);

  return tooltip;
};

const addListeners = (element: HTMLElement, tooltip: HTMLElement, updateFn: () => void) => {
  element.addEventListener('mouseenter', () => {
    tooltip.style.display = 'block';
    updateFn();
  });

  element.addEventListener('mouseleave', () => {
    tooltip.style.display = '';
  });
};

tooltipElements.forEach((element) => {
  const content = element.dataset.tooltip ?? '';
  const placement = (element.dataset.tooltipPlacement ?? 'top') as Placement;
  const tooltip = createTooltip(content);
  const updateFn = updateTooltip({ element, tooltip, placement });

  element.setAttribute('aria-describedby', tooltip.id);

  autoUpdate(element, tooltip, updateFn);
  addListeners(element, tooltip, updateFn);
});
