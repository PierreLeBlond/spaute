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

  $: organizerRole = data['organizerRole'];
  $: gig = data['gig'];
  $: presence = data.presence;
  $: presences = data.presences;
  $: players = data.players;
</script>

<div class="flex justify-between">
  <ReturnLink href="/band/{data['band'].id}/gigs" />
  {#if data['isAdmin'] || data['organizerRole']}
    <EditLink href="/band/{data['band'].id}/gig/{gig.id}/edit" />
  {/if}
</div>

<div class="h-full w-full overflow-y-auto">
  <GigPage
    {gig}
    {presence}
    joinAction={'?/join'}
    updateAction={'?/update'}
  />

  <List>
    {#each presences as presence}
      {#if organizerRole}
        <ListLinkItem>
          <div
            class="contents text-red-300"
            class:!text-green-300={presence.value}
          >
            <PlayerLinkItem
              player={presence.player}
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
            <PlayerItem player={presence.player} />
          </div>
        </ListItem>
      {/if}
    {/each}
    {#each players as player}
      {#if organizerRole}
        <ListLinkItem>
          <PlayerLinkItem
            {player}
            href="/band/{data['band'].id}/gig/{data['gig'].id}/player/{player.id}"
          />
        </ListLinkItem>
      {:else}
        <ListItem>
          <PlayerItem {player} />
        </ListItem>
      {/if}
    {/each}
  </List>
</div>
