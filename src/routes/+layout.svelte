<script lang="ts">
  import { page } from '$app/stores';
  import Header from '$lib/components/layout/Header.svelte';
  import SlidingTabs from '$lib/components/layout/SlidingTabs.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { getFlash } from 'sveltekit-flash-message/client';

  import '../app.css';
  import type { LayoutData } from './$types';

  export let data: LayoutData;

  const flash = getFlash(page);
  flash.subscribe((message) => {
    if (!message) {
      return;
    }
    sendToast(message);
  });
</script>

<main
  class="flex h-screen w-screen flex-col items-center justify-center bg-neutral-200 text-xl text-neutral-600"
  style:height={'100svh'}
>
  <div class="absolute top-0 h-20 w-full">
    <Header />
  </div>
  <div class="flex w-full grow flex-col items-center overflow-y-hidden bg-neutral-100 pt-20">
    <SlidingTabs href={data.href}>
      <slot />
    </SlidingTabs>
  </div>
</main>
