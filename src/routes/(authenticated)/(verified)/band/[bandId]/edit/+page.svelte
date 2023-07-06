<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const deleteBandVoiceForm = superForm(data.deleteBandVoiceForm);

  const deleteForm = superForm(data.deleteForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.',
    flashMessage: {
      module: flashModule
    }
  });
</script>

<div class="flex">
  <ReturnLink href="/band/{data['band'].id}" />
</div>

<div class="w-full overflow-y-auto p-2">
  {#if data.currentMembership?.isAdmin}
    <div class="py-2">
      <RightLink
        href="/band/{data.band.id}/edit/voice"
        label="Ajouter un pupitre"
      />
    </div>
  {/if}

  <div class="pb-2">
    <List>
      {#if data.bandVoices.length == 0}
        <p class="text-xs">Shut ! vous entendez ? Le silence...</p>
      {:else}
        {#each data.bandVoices as voice}
          <ListItem>
            <div class="flex w-full items-center justify-between">
              <p class="w-full rounded p-2 text-sm">
                {voice.instrument.name}
              </p>
              {#if data.currentMembership?.isAdmin}
                <Form
                  form={deleteBandVoiceForm}
                  action="?/deleteBandVoice"
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
                </Form>
              {/if}
            </div>
          </ListItem>
        {/each}
      {/if}
    </List>
  </div>
  <div class="border border-red-500 p-2 text-red-500">
    <Form
      form={deleteForm}
      action="?/delete"
    >
      <p class="text-xs">Suppression de la fanfare</p>
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <input
        type="hidden"
        name="name"
        value={data.band.name}
      />
      <div class="pb-2">
        <Text
          form={deleteForm}
          field="nameCopy"
          label="recopie son nom pour valider la suppression"
        />
      </div>
      <Button
        form={deleteForm}
        label="Supprimer"
        deleting={true}
        disabledWhenNotTainted={true}
      />
    </Form>
  </div>
</div>
