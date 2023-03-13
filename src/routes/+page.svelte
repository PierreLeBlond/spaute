<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1
  class="flex items-center justify-center pb-16 w-full h-64 text-2xl text-yellow-500"
>
  Welcome to Spaute
</h1>
<h2 class="pb-8 w-full text-center">Choose your band :</h2>

{#each data.bands as band}
  <a
    class="w-64 border border-yellow-200 rounded text-center"
    href="/band/{band.id}/gigs"
  >
    {band.name}
  </a>
{/each}
