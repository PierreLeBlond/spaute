<script lang="ts">
  import GigPage from '$lib/components/gigs/gig/GigPage.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerLinkItem from '$lib/components/gigs/gig/PlayerLinkItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';

  import type { PageData } from './$types';

  export let data: PageData;

  $: remainingMemberships = data.band
    ? data.band.memberships.filter((membership) =>
        data.gig.presences.every((presence) => presence.player.id != membership.player.id)
      )
    : [];
</script>

<div class="flex justify-between">
  <ReturnLink href="/gigs" />
  {#if data.currentMembership?.isAdmin || data.currentPresence?.isOrganizer}
    <EditLink href="/gig/{data.gig.id}/edit" />
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
      {@const membership = data.band
        ? data.band.memberships.find((membership) => membership.player.id == presence.player.id)
        : null}
      <ListItem>
        <div
          class="contents text-red-300"
          class:!text-green-300={presence.value}
        >
          {#if data.currentPresence?.playerId == presence.player.id}
            <PlayerItem
              player={presence.player}
              isAdmin={membership?.isAdmin}
              isOrganizer={presence.isOrganizer}
              highlighted={true}
            />
          {:else if data.currentMembership?.isAdmin || data.currentPresence?.isOrganizer}
            <PlayerLinkItem
              player={presence.player}
              href="/gig/{data.gig.id}/player/{presence.player.id}"
              isAdmin={membership?.isAdmin}
              isOrganizer={presence.isOrganizer}
            />
          {:else}
            <PlayerItem
              player={presence.player}
              isAdmin={membership?.isAdmin}
              isOrganizer={presence.isOrganizer}
            />
          {/if}
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
