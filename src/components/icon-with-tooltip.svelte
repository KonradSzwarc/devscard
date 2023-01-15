<script lang="ts">
  import SvelteIcon from './icon.svelte';
  import SvelteTooltip from './tooltip.svelte';
  import type { Placement, offset, Padding } from '@floating-ui/dom';
  import type { IconName } from '@/types/icon';

  export let name: IconName | undefined = undefined;
  export let color: string | undefined = undefined;
  export let size: number;

  export let content: string;
  export let placement: Placement | undefined = undefined;
  export let padding: Padding = 8;
  export let spacing: Parameters<typeof offset>[0] = 8;
</script>

<SvelteTooltip {content} {placement} {padding} {spacing}>
  <SvelteIcon {name} {color} {size} />
</SvelteTooltip>
