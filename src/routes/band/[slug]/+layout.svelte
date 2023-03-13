<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<h1 class="flex items-center justify-center h-16">
  Hello {data.band.name} !
</h1>

<ul class="grid grid-cols-2 w-full items-center justify-center pb-8">
  <li class="relative">
    <a class="w-full block text-center" href="./gigs">Gigs</a>
  </li>
  <li>
    <a class="w-full block text-center" href="./players">Players</a>
  </li>
</ul>

<slot />
