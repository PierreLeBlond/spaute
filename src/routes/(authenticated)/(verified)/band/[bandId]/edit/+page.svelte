<script lang="ts">
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import Rest from '$lib/components/logos/Rest.svelte';
  import NavBar from '$lib/components/layout/NavBar.svelte';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<NavBar
  returnHref="/band/{data['band'].id}"
  label={data.band.name}
/>

<p class="px-16 pt-8 text-center text-xs">
  <b>Pupitres</b>
</p>

<List>
  {#if data.bandVoices.length == 0}
    <Rest></Rest>
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
  <div class="px-16 pb-4 pt-8">
    <RightLink href="/band/{data.band.id}/edit/voice">Ajouter un pupitre</RightLink>
  </div>
  <div class="px-16 pb-8 pt-4">
    <RightLink
      href="/band/{data.band.id}/edit/delete"
      danger>Supprimer la fanfare ?</RightLink
    >
  </div>
{/if}
