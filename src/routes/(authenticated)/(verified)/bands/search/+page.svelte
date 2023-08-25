<script lang="ts">
  import SearchBar from '$lib/components/forms/SearchBar.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import NavBar from '$lib/components/layout/NavBar.svelte';
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

<NavBar returnHref="/bands" />

<div class="p-8">
  <SearchBar
    bind:searchValue
    on:input={throttle(update, 500)}
  />
</div>
<List>
  {#if bands.length == 0}
    <Rest></Rest>
  {/if}
  {#each bands as band}
    <ListLinkItem>
      <div class="flex w-full items-center justify-between">
        <a
          href="/band/{band.id}"
          class="grow rounded p-2 text-sm">{band.name}</a
        >
      </div>
    </ListLinkItem>
  {/each}
</List>
