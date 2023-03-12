<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Welcome to Spaute</h1>

{#each data.bands as band}
  <a href="band/{band.id}">
    {band.name}
  </a>
{/each}
