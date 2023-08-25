<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import Rest from '$lib/components/logos/Rest.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<p class="px-16 pt-8 text-center text-xs">
  <b>Fanfares</b>
</p>

<List>
  {#if data.memberships.length == 0}
    <Rest></Rest>
  {:else}
    {#each data.memberships as membership}
      <ListLinkItem>
        <div class="flex w-full items-center justify-between">
          <a
            href="/band/{membership.band.id}"
            class="grow rounded p-2 text-sm">{membership.band.name}</a
          >
        </div>
      </ListLinkItem>
    {/each}
  {/if}
</List>
<div class="px-16 pb-4 pt-8">
  <RightLink href="/band">Créer une fanfare</RightLink>
</div>
<div class="px-16 pb-8 pt-4">
  <RightLink href="/bands/search">Rechercher</RightLink>
</div>
