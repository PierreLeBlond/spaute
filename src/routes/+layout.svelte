<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
</script>

<main
  class="flex h-screen w-screen flex-col items-center bg-neutral-800 text-xl text-orange-300"
  style:height={'100svh'}
>
  <div class="absolute top-0 h-40 w-full">
    <Header />
  </div>
  <div class="flex w-full grow flex-col items-center overflow-y-hidden pt-40">
    <slot />
  </div>
</main>
