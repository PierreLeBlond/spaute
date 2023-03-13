<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: gigs = data.gigs;
</script>

<ul class="grid grid-cols-1 gap-y-2">
  {#each gigs as gig}
    <li class="w-64">
      <a
        class="w-full block border border-yellow-200 rounded text-center"
        href="./gig/{gig.id}"
      >
        {gig.name}</a
      >
    </li>
  {/each}
</ul>
