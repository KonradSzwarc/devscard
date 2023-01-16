<script lang="ts">
  import { isClient } from '@/utils/env';
  import Icon from './icon.svelte';

  let theme = localStorage.getItem('theme') ?? 'light';

  const toggleTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light';
  };

  const handleThemeChange = () => {
    if (isClient) {
      document.documentElement.classList[theme === 'dark' ? 'add' : 'remove']('dark');
      localStorage.setItem('theme', theme);
    }
  };

  $: theme, handleThemeChange();
</script>

<button
  on:click={toggleTheme}
  class="fixed bottom-3 left-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-400 shadow-xl transition focus:ring-primary-500 dark:bg-gray-600 dark:text-gray-200"
>
  <Icon name={theme === 'light' ? 'ri:moon-fill' : 'ri:sun-line'} size={20} />
</button>
