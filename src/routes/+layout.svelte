<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { initFlash } from 'sveltekit-flash-message/client';

  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const flash = initFlash(page);
  flash.subscribe((message) => {
    if (!message) {
      return;
    }
    sendToast(message);
  });

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
