<script lang="ts">
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<div class="flex">
  <ReturnLink href="/band/{data['band'].id}" />
</div>

<div class="w-full overflow-y-auto">
  {#if data.currentMembership?.isAdmin}
    <div class="px-16 py-8">
      <RightLink href="/band/{data.band.id}/edit/voice">Ajouter un pupitre</RightLink>
    </div>
  {/if}

  <List>
    {#if data.bandVoices.length == 0}
      <p class="text-xs p-4">Shut ! vous entendez ? Le silence...</p>
    {:else}
      {#each data.bandVoices as voice}
        <ListItem>
          <div class="flex w-full items-center justify-between">
            <p class="w-full rounded p-2 text-sm">
              {voice.instrument.name}
            </p>
            {#if data.currentMembership?.isAdmin}
              <Form
                {form}
                hideErrors
              >
                <div class="flex justify-end">
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
                </div>
              </Form>
            {/if}
          </div>
        </ListItem>
      {/each}
    {/if}
  </List>

  {#if data.currentMembership?.isAdmin}
    <div class="px-16 py-8">
      <RightLink
        href="/band/{data.band.id}/edit/delete"
        danger>Supprimer la fanfare ?</RightLink
      >
    </div>
  {/if}
</div>
