<script lang="ts">
  import GigPage from '$lib/components/gigs/gig/GigPage.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerLinkItem from '$lib/components/gigs/gig/PlayerLinkItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';

  import type { PageData } from './$types';

  export let data: PageData;

  $: remainingMemberships = data.band.memberships.filter((membership) =>
    data.gig.presences.every((presence) => presence.player.id != membership.player.id)
  );
</script>

<div class="flex justify-between">
  <ReturnLink href="/band/{data.band.id}/gigs" />
  {#if data.currentMembership?.isAdmin || data.currentPresence?.isOrganizer}
    <EditLink href="/band/{data.band.id}/gig/{data.gig.id}/edit" />
  {/if}
</div>

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
      {#if data.currentPresence?.isOrganizer}
        <ListLinkItem>
          <div
            class="contents text-red-300"
            class:!text-green-300={presence.value}
          >
            <PlayerLinkItem
              player={presence.player}
              isOrganizer={presence.isOrganizer}
              href="/band/{data['band'].id}/gig/{data['gig'].id}/player/{presence.player.id}"
            />
          </div>
        </ListLinkItem>
      {:else}
        <ListItem>
          <div
            class="contents text-red-300"
            class:!text-green-300={presence.value}
          >
            <PlayerItem
              player={presence.player}
              isOrganizer={presence.isOrganizer}
            />
          </div>
        </ListItem>
      {/if}
    {/each}
    {#each remainingMemberships as membership}
      <ListItem>
        <PlayerItem player={membership.player} />
      </ListItem>
    {/each}
  </List>
</div>
