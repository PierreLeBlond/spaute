<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import type { Band, Gig, Player, Presence } from '@prisma/client';

  import GigView from './gig/GigView.svelte';

  export let player: Player;
  export let gigs: (Gig & { band: Band | null; presences: Presence[] })[];

  const presences = new Map<Gig, Presence | null>(
    gigs.map((gig) => [gig, gig.presences.find((presence) => presence.playerId == player.id) || null])
  );
</script>

<List>
  {#if gigs.length == 0}
    <p class="text-xs">Pas de prestas à l'horizon. On se fait chier...</p>
  {:else}
    {#each gigs as gig}
      <ListLinkItem>
        <a
          href="./gig/{gig.id}"
          class="block w-full rounded p-2 text-sm"
        >
          <GigView
            {gig}
            band={gig.band}
            presence={presences.get(gig) || null}
            showLink={false}
          />
        </a>
      </ListLinkItem>
    {/each}
  {/if}
</List>
