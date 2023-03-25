<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: bands = data.bands;
</script>

<div class="p-2">
  <RightLink
    href="/band"
    label="Créer une fanfare"
  />
</div>
<List>
  {#if bands.length == 0}
    <p class="text-xs">T'as pas de fanfare ? la tristesse...</p>
  {:else}
    {#each bands as band}
      <ListLinkItem>
        <a
          href="./band/{band.id}"
          class="flex w-full rounded p-2 text-sm"
        >
          {band.name}
        </a>
      </ListLinkItem>
    {/each}
  {/if}
</List>
