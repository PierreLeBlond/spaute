<script lang="ts">
  import SearchBar from '$lib/components/forms/SearchBar.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import Rest from '$lib/components/logos/Rest.svelte';
  import { trpc } from '$lib/trpc/client';
  import type { Band } from '@prisma/client';
  import throttle from 'lodash.throttle';

  let searchValue: string;
  let bands: Band[] = [];

  const update = async () => {
    bands = searchValue != '' ? await trpc().bands.list.query({ search: searchValue }) : [];
  };
</script>

<SearchBar
  bind:searchValue
  on:input={throttle(update, 500)}
/>
<List>
  {#if bands.length == 0}
    <Rest></Rest>
  {/if}
  {#each bands as band}
    <ListItem type="link">
      <a
        href="/band/{band.id}"
        class="grow rounded text-sm">{band.name}</a
      >
    </ListItem>
  {/each}
</List>
