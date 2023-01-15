<script lang="ts">
  import 'iconify-icon';
  import type { IconName } from '@/types/icon';
  import { isServer } from '@/utils/env';

  export let name: IconName;
  export let size: number;
  export let color: string | undefined = undefined;
</script>

{#if isServer}
  <div style="width: {size}px; height: {size}px" />
{:else}
  <iconify-icon icon={name} width={size} height={size} style="color: {color}; width: {size}px; height: {size}px">
    ></iconify-icon
  >
{/if}
