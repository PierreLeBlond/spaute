<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: band = data.band;
  $: players = band.players;
  $: gigs = band.gigs;

  console.log(data);
</script>

<h1>
  Hello {data.band.name} !
</h1>

<h2>Players:</h2>

<ul>
  {#each players as player}
    <li>
      <a href="./{band.id}/player/{player.id}"> {player.name}</a>
    </li>
  {/each}
</ul>

<h2>Gigs:</h2>

<ul>
  {#each gigs as gig}
    <li>
      <a href="./{band.id}/gig/{gig.id}"> {gig.name}</a>
    </li>
  {/each}
</ul>
