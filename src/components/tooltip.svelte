<script lang="ts">
  import { computePosition, Placement, flip, shift, offset, Padding } from '@floating-ui/dom';

  export let content: string;
  export let placement: Placement | undefined;
  export let padding: Padding = 8;
  export let spacing: Parameters<typeof offset>[0] = 8;

  let button: HTMLElement;
  let tooltip: HTMLElement;

  const updateTooltip = () => {
    computePosition(button, tooltip, { placement, middleware: [offset(spacing), flip(), shift({ padding })] }).then(
      ({ x, y }) => {
        Object.assign(tooltip.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      }
    );
  };

  const showTooltip = () => {
    tooltip.style.display = 'block';
    updateTooltip();
  };

  const hideTooltip = () => {
    tooltip.style.display = '';
  };
</script>

<div
  class="flex h-fit w-fit items-center justify-center"
  bind:this={button}
  on:mouseenter={showTooltip}
  on:mouseleave={hideTooltip}
>
  <slot />
</div>
<div
  bind:this={tooltip}
  role="tooltip"
  class="absolute top-0 left-0 hidden max-w-sm rounded-lg bg-gray-700 px-3 py-1 text-white dark:bg-gray-100 dark:text-gray-800 sm:max-w-xs"
>
  {content}
</div>
