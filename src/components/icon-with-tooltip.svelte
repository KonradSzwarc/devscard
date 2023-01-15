<script lang="ts">
  import type { Placement, offset, Padding } from '@floating-ui/dom';
  import type { IconName } from '@/types/icon';
  import Icon from './icon.svelte';
  import Tooltip from './tooltip.svelte';

  export let name: IconName;
  export let size: number;
  export let color: string | undefined = undefined;

  export let content: string;
  export let placement: Placement | undefined = undefined;
  export let padding: Padding = 8;
  export let spacing: Parameters<typeof offset>[0] = 8;
</script>

<Tooltip {content} {placement} {padding} {spacing}>
  <Icon {name} {color} {size} />
</Tooltip>
