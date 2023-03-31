<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';
  import type { LayoutData } from './$types';
  import { page } from '$app/stores';

  export let data: LayoutData;

  $: tabs = $page.data['tabs'];
</script>

<main
  class="flex h-screen w-screen flex-col items-center justify-center bg-neutral-800 text-xl text-orange-300"
  style:height={'100svh'}
>
  <div class="absolute top-0 h-40 w-full">
    <Header />
  </div>
  <div class="flex w-full grow flex-col items-center overflow-y-hidden bg-neutral-900 pt-40 sm:w-96">
    <SlidingTabs
      href={data.href}
      {tabs}><slot /></SlidingTabs
    >
  </div>
</main>
