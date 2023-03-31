<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { PageData } from './$types';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';

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
      <div class="flex w-full items-center justify-between">
        <p class="w-full rounded p-2 text-sm">{instrument.name}</p>
        <form
          method="POST"
          action="?/delete&instrumentId={instrument.id}"
        >
          <DeleteButtonIcon />
        </form>
      </div>
    </ListItem>
  {/each}
</List>
