<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { PageData } from './$types';
  import RightLink from '$lib/components/links/RightLink.svelte';

  export let data: PageData;

  $: instruments = data.instruments;
</script>

<div class="p-2">
  <RightLink
    href="/admin/instrument"
    label="Ajouter un instrument"
  />
</div>

<List>
  {#each instruments as instrument}
    <ListItem>
      <p class="p-2 text-sm">{instrument.name}</p>
    </ListItem>
  {/each}
</List>
