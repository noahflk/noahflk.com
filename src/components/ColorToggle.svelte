<script>
  import MoonIcon from './icons/MoonIcon.svelte';
  import SunIcon from './icons/SunIcon.svelte';

  let theme = localStorage.getItem('theme');

  function handleClick() {
    theme = theme === 'light' ? 'dark' : 'light';

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }
</script>

<button on:click={handleClick} class="hover:bg-slate-100 py-2 px-3 rounded-lg dark:hover:bg-neutral-800">
  {#if theme === 'light'}
    <MoonIcon />
  {:else if theme === 'dark'}
    <SunIcon />
  {:else}
    <SunIcon class="hidden" />
  {/if}
</button>
