<script lang="ts">
  import type { PageData } from "./$types";
  import Gig from "./Gig.svelte";
  import Presence from "./Presence.svelte";

  export let data: PageData;

  $: newGigs = data.newGigs;
  $: presences = data.presences;
  $: player = data.player;
</script>

<h2 class="pb-4">New gigs</h2>
{#if newGigs.length == 0}
  <h3 class="text-sm">No new gigs :(</h3>
{/if}
<ul class="grid grid-cols-1 gap-y-2 pb-8">
  {#each newGigs as gig}
    <li class="w-64">
      <Gig {player} {gig} />
    </li>
  {/each}
</ul>

<h2 class="pb-4">Upcomming gigs</h2>
{#if presences.length == 0}
  <h3 class="text-sm">No Upcomming gigs :(</h3>
{/if}
<ul class="grid grid-cols-1 gap-y-2 pb-8">
  {#each presences as presence}
    <li class="w-64">
      <Presence {presence} gig={presence.gig} />
    </li>
  {/each}
</ul>

<h2 class="pb-4">Past gigs</h2>
