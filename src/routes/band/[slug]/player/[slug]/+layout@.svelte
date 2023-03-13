<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<h1 class="flex items-center justify-center h-16">
  Hello {data.player.name} !
</h1>

<ul class="grid grid-cols-2 w-full items-center justify-center pb-8">
  <li class="relative">
    <a class="w-full block text-center" href="./presences">Presences</a>
  </li>
  <li>
    <a class="w-full block text-center" href="./roles">Roles</a>
  </li>
</ul>

<slot />
