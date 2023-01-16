<script lang="ts">
  import type { Placement, offset, Padding } from '@floating-ui/dom';
  import type { IconName } from '@/types/icon';
  import Icon from './icon.svelte';
  import Tooltip from './tooltip.svelte';

  type IconButtonSize = 'small' | 'large';

  export let name: string;
  export let icon: IconName;
  export let target: string | undefined = undefined;
  export let href: string;
  export let size: IconButtonSize;

  export let content: string | undefined = undefined;
  export let placement: Placement | undefined = undefined;
  export let padding: Padding = 8;
  export let spacing: Parameters<typeof offset>[0] = 8;

  const sizeMap: Record<IconButtonSize, string> = {
    small: 'w-7 h-7',
    large: 'w-9 h-9',
  };

  const classes = /* tw */ {
    main: 'flex items-center justify-center rounded text-gray-400 bg-gray-100 dark:bg-gray-600 dark:text-gray-200',
    active: 'active:translate-y-px',
    focus: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
  };
</script>

<Tooltip content={name} {placement} {padding} {spacing}>
  <a {href} {target} class={`${classes.main} ${classes.active} ${classes.focus} ${sizeMap[size]}`} aria-label={name}>
    <Icon name={icon} size={16} />
  </a>
</Tooltip>
