<script lang="ts">
  import 'iconify-icon';
  import type { IconName } from '@/types/icon';
  import { isServer } from '@/utils/env';

  export let name: IconName;
  export let size: number;
  export let color: string | undefined = undefined;

  const dimensions = `width: ${size}px; height: ${size}px`;
</script>

{#if isServer}
  <div style={dimensions} />
{:else}
  <iconify-icon icon={name} width={size} height={size} style="color: {color}; {dimensions}" />
{/if}
