<script lang="ts">
  import type { Presence, Membership, Gig, Player } from '@prisma/client';

  import PlayerItem from './PlayerItem.svelte';
  import PlayerLinkItem from './PlayerLinkItem.svelte';

  export let currentPresence: Presence | null;
  export let presence: Presence & { player: Player };

  export let currentMembership: Membership | null;
  export let membership: Membership | null;

  export let gig: Gig;
</script>

{#if currentPresence?.playerId == presence.player.id}
  <PlayerItem
    player={presence.player}
    isAdmin={membership?.isAdmin}
    isOrganizer={presence.isOrganizer}
    type="self"
  />
{:else if currentMembership?.isAdmin || currentPresence?.isOrganizer}
  <PlayerLinkItem
    player={presence.player}
    href="/gig/{gig.id}/player/{presence.player.id}"
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
