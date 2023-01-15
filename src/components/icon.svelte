<script lang="ts">
  import 'iconify-icon';
  import type { IconName } from '@/types/icon';
  import { isServer } from '@/utils/env';

  export let name: IconName | undefined = undefined;
  export let color: string | undefined = undefined;
  export let size: number;
</script>

{#if name && !isServer}
  <iconify-icon icon={name} style="color: {color}; font-size: {size}px"> ></iconify-icon>
{/if}

{#if isServer}
  <div style="width: {size}px; height: {size}px" />
{/if}
