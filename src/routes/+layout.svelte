<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
</script>

<main
  class="flex flex-col items-center bg-zinc-900 h-screen w-screen text-xl text-yellow-300"
  style:height={"100svh"}
>
  <div class="absolute h-16 top-0 w-full">
    <Header />
  </div>
  <div class="p-2 flex flex-col items-center w-full pt-16 overflow-y-hidden">
    <slot />
  </div>
</main>
