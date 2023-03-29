<script lang="ts">
  import GigPage from '$lib/components/gigs/gig/GigPage.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: gig = data['gig'];
  $: presence = data.presence;
  $: presences = data.presences;
  $: players = data.players;
</script>

<ReturnLink href="/gigs" />

<GigPage
  {gig}
  {presence}
  joinAction={'?/join'}
  updateAction={'?/update'}
/>

<List>
  {#each presences as presence}
    <ListItem>
      <div
        class="contents text-red-300"
        class:!text-green-300={presence.value}
      >
        <PlayerItem player={presence.player} />
      </div>
    </ListItem>
  {/each}
  {#each players as player}
    <ListItem>
      <PlayerItem {player} />
    </ListItem>
  {/each}
</List>
