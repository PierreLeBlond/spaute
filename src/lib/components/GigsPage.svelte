<script lang="ts">
  import type { Band, Gig, Presence } from '@prisma/client';
  import GigView from './GigView.svelte';

  import List from './layout/List.svelte';
  import ListLinkItem from './layout/ListLinkItem.svelte';

  export let presences: (Presence & { gig: Gig & { band: Band } })[];
  export let newGigs: (Gig & { band: Band })[];
</script>

<List>
  {#if presences.length == 0 && newGigs.length == 0}
    <p class="text-xs">Pas de prestas à l'horizon. On se fait chier...</p>
  {:else}
    {#each presences as presence}
      <ListLinkItem>
        <a
          href="./gig/{presence.gig.id}"
          class="block w-full rounded p-2 text-sm"
        >
          <GigView
            gig={presence.gig}
            band={presence.gig.band}
            {presence}
          />
        </a>
      </ListLinkItem>
    {/each}
    {#each newGigs as gig}
      <ListLinkItem>
        <a
          href="./gig/{gig.id}"
          class="block w-full rounded p-2 text-sm"
        >
          <GigView
            {gig}
            band={gig.band}
            presence={null}
            showLink={false}
          />
        </a>
      </ListLinkItem>
    {/each}
  {/if}
</List>
