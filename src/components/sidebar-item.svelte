<script lang="ts">
  import type { SectionKey } from '@/types/data';
  import type { IconName } from '@/types/icon';
  import hashState from '@/utils/hash-state';
  import Icon from './icon.svelte';
  import Tooltip from './tooltip.svelte';

  export let section: SectionKey;
  export let icon: IconName;
  export let title: string = '';

  let hash = hashState.getHash();

  hashState.subscribe((newHash) => (hash = newHash));

  const href = `#${section}`;

  $: active = hash === href;

  const classes = /* tw */ {
    main: 'inline-flex h-10 w-10 items-center justify-center rounded-lg transition',
    active: 'bg-primary-600 text-white',
    inactive: 'text-gray-400 hover:bg-primary-600 hover:text-white dark:text-gray-200',
  };
</script>

<Tooltip content={`${title || section.charAt(0).toUpperCase() + section.slice(1)}`} placement="left">
  <a
    {href}
    class={`${classes.main} ${active ? classes.active : classes.inactive}`}
    aria-current={active ? 'page' : undefined}
    aria-label={`${section} section`}
  >
    <Icon name={icon} size={20} />
  </a>
</Tooltip>
