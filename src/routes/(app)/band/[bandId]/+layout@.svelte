<script lang="ts">
  import { page } from "$app/stores";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  const routeMap = new Map<string, string>([
    [`/band/${data.band.id}`, "0"],
    [`/band/${data.band.id}/gigs`, "100%"],
    [`/band/${data.band.id}/voices`, "200%"],
  ]);
  $: pathname = $page.url.pathname ?? "";
  $: selectedOffset = routeMap.get(pathname);
</script>

<ul class="grid grid-cols-3 w-full sm:w-64 items-center justify-center pb-8">
  <li>
    <a class="w-full block text-center" href="/band/{data.band.id}">Profil</a>
  </li>
  <li>
    <a class="w-full block text-center" href="/band/{data.band.id}/gigs">Gigs</a
    >
  </li>
  <li>
    <a class="w-full block text-center" href="/band/{data.band.id}/voices"
      >Voices</a
    >
  </li>
  <li
    class="relative h-0.5 mx-2 border border-yellow-600 col-span-1 col-start-1 transition-all"
    style:left={selectedOffset}
  />
</ul>

<slot />
