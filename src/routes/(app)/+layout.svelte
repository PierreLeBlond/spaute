<script lang="ts">
  import { page } from "$app/stores";
  const routeMap = new Map<string, string>([
    ["/bands", "0"],
    ["/gigs", "100%"],
    ["/roles", "200%"],
  ]);
  $: pathname = $page.url.pathname ?? "";
  $: selectedOffset = routeMap.get(pathname);
</script>

<ul class="grid grid-cols-3 w-full sm:w-64 items-center justify-center pb-8">
  <li class="relative">
    <a class="w-full block text-center" href="./bands">Bands</a>
  </li>
  <li>
    <a class="w-full block text-center" href="./gigs">Gigs</a>
  </li>
  <li>
    <a class="w-full block text-center" href="./roles">Roles</a>
  </li>
  <li
    class="relative h-0.5 mx-2 border border-yellow-600 col-span-1 col-start-1 transition-all"
    style:left={selectedOffset}
  />
</ul>

<slot />
