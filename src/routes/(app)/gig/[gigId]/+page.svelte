<script lang="ts">
  import GigPage from '$lib/components/gigs/gig/GigPage.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';

  import type { PageData } from './$types';

  export let data: PageData;

  $: remainingMemberships = data.band.memberships.filter((membership) =>
    data.gig.presences.every((presence) => presence.player.id != membership.player.id)
  );
</script>

<ReturnLink href="/gigs" />

<div class="h-full w-full overflow-y-auto">
  <GigPage
    player={data.currentPlayer}
    gig={data.gig}
    presence={data.currentPresence}
    createAction={'?/create'}
    updateAction={'?/update'}
    data={data.form}
  />

  <List>
    {#each data.gig.presences as presence}
      <ListItem>
        <div
          class="contents text-red-300"
          class:!text-green-300={presence.value}
        >
          <PlayerItem player={presence.player} />
        </div>
      </ListItem>
    {/each}
    {#each remainingMemberships as membership}
      <ListItem>
        <PlayerItem player={membership.player} />
      </ListItem>
    {/each}
  </List>
</div>
