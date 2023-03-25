<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { PageData } from './$types';
  import DeleteButton from '$lib/components/buttons/DeleteButton.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';

  export let data: PageData;

  $: voices = data.voices;
</script>

<div class="p-2">
  <RightLink
    href="/band/{data.band.id}/voice"
    label="Ajouter un pupitre"
  />
</div>

<List>
  {#if voices.length == 0}
    <p class="text-xs">Shut ! vous entendez ? Le silence...</p>
  {:else}
    {#each voices as voice}
      <ListItem>
        <div class="flex w-full items-center justify-between">
          <p class="w-full rounded p-2 text-sm">
            {voice.instrument.name}
          </p>
          <DeleteButton
            icon={true}
            label="Supprimer"
            url="/api/voice/{voice.id}"
            backUrl="./voices"
          />
        </div>
      </ListItem>
    {/each}
  {/if}
</List>
