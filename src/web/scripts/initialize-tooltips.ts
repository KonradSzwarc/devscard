import type { Placement } from '@floating-ui/dom';

interface UpdateTooltipOptions {
  element: HTMLElement;
  tooltip: HTMLElement;
  placement: Placement;
}

const elementsWithTooltipData = [...document.querySelectorAll('[data-tooltip]')] as HTMLElement[];

if (elementsWithTooltipData.length > 0) {
  Promise.all([import('@floating-ui/dom'), import('nanoid')]).then(([floatingUi, { nanoid }]) => {
    const { autoUpdate, computePosition, flip, offset, shift } = floatingUi;

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

    const tooltipClass =
      /* tw */ 'absolute top-0 left-0 hidden max-w-sm animate-show rounded-lg bg-gray-700 px-3 py-1 text-white dark:bg-gray-100 dark:text-gray-800 sm:max-w-xs';

    const createTooltip = (content: string) => {
      const tooltip = document.createElement('div');

      tooltip.innerText = content;
      tooltip.setAttribute('id', `tooltip-${nanoid(8)}`);
      tooltip.setAttribute('class', tooltipClass);
      tooltip.setAttribute('role', 'tooltip');

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

    const creteTooltipsForElements = (elements: HTMLElement[]) => {
      const tooltipsContainer = document.createElement('div');

      const tooltips = elements.map((element) => {
        const tooltip = createTooltip(element.dataset.tooltip ?? '');
        tooltipsContainer.appendChild(tooltip);
        return { tooltip, element };
      });

      document.body.appendChild(tooltipsContainer);

      return tooltips;
    };

    creteTooltipsForElements(elementsWithTooltipData).forEach(({ element, tooltip }) => {
      const placement = (element.dataset.tooltipPlacement ?? 'top') as Placement;
      const updateFn = updateTooltip({ element, tooltip, placement });

      element.setAttribute('aria-describedby', tooltip.id);

      autoUpdate(element, tooltip, updateFn);
      addListeners(element, tooltip, updateFn);
    });
  });
}
