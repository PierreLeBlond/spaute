<script lang="ts">
  import SearchBar from '$lib/components/forms/SearchBar.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { trpc } from '$lib/trpc/client';
  import type { Band } from '@prisma/client';
  import throttle from 'lodash.throttle';

  let searchValue: string;
  let bands: Band[] = [];

  const update = async () => {
    bands = searchValue != '' ? await trpc().bands.list.query({ search: searchValue }) : [];
  };
</script>

<div class="flex">
  <ReturnLink href="/bands" />
</div>

<div class="p-2">
  <SearchBar
    bind:searchValue
    on:input={throttle(update, 500)}
  />
</div>
<List>
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
