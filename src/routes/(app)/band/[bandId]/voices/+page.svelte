<script lang="ts">
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { enhance } = superForm(data.form);
</script>

{#if data.currentMembership?.isAdmin}
  <div class="p-2">
    <RightLink
      href="/band/{data.band.id}/voice"
      label="Ajouter un pupitre"
    />
  </div>
{/if}

<List>
  {#if data.voices.length == 0}
    <p class="text-xs">Shut ! vous entendez ? Le silence...</p>
  {:else}
    {#each data.voices as voice}
      <ListItem>
        <div class="flex w-full items-center justify-between">
          <p class="w-full rounded p-2 text-sm">
            {voice.instrument.name}
          </p>
          {#if data.currentMembership?.isAdmin}
            <form
              method="POST"
              action="?/delete"
              use:enhance
            >
              <input
                type="hidden"
                name="id"
                value={voice.id}
              />
              <input
                type="hidden"
                name="bandId"
                value={data.band.id}
              />
              <DeleteButtonIcon />
            </form>
          {/if}
        </div>
      </ListItem>
    {/each}
  {/if}
</List>
