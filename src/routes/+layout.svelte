<script lang="ts">
  import "../app.css";
  import { page } from "$app/stores";
  import Header from "$lib/components/Header.svelte";

  const routeMap = new Map<string, string>([
    ["/bands", "0"],
    ["/gigs", "100%"],
    ["/roles", "200%"],
  ]);
  $: route = $page.route.id ?? "";
  $: selectedOffset = routeMap.get(route);
</script>

<main
  class="flex flex-col items-center bg-zinc-900 w-screen h-screen text-xl text-yellow-300"
>
  <div class="absolute h-16 top-0 w-full">
    <Header />
  </div>
  <div class="p-2 flex flex-col items-center w-full pt-16 overflow-y-hidden">
    <slot />
  </div>
</main>
