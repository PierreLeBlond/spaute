<script lang="ts">
  import Delimiter from '$lib/components/layout/Delimiter.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import Rest from '$lib/components/logos/Rest.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<RightLink href="/band">Créer une fanfare</RightLink>
<RightLink href="/bands/search">Rechercher</RightLink>

<Delimiter></Delimiter>

<Title>Mes fanfares</Title>

<List>
  {#if data.memberships.length == 0}
    <Rest></Rest>
  {:else}
    {#each data.memberships as membership}
      <ListItem type="link">
        <a
          href="/band/{membership.band.id}"
          class="w-full grow rounded text-sm">{membership.band.name}</a
        >
      </ListItem>
    {/each}
  {/if}
</List>
