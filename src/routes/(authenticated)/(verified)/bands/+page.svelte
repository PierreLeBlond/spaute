<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="p-2">
  <RightLink
    href="/band"
    label="Créer une fanfare"
  />
</div>
<List>
  {#if data.memberships.length == 0}
    <p class="text-xs">T'as pas de fanfare ? la tristesse...</p>
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
<div class="p-2">
  <RightLink
    href="/bands/search"
    label="Rechercher une fanfare"
  />
</div>
