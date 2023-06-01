<script lang="ts">
  import DeleteButton from '$lib/components/forms/DeleteButton.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const {
    enhance: deleteBandVoiceEnhance,
    message: deleteBandVoiceMessage,
    errors: deleteBandVoiceErrors
  } = superForm(data.deleteBandVoiceForm);
  deleteBandVoiceMessage.subscribe(sendToast);

  const {
    form: deleteForm,
    errors: deleteErrors,
    constraints: deleteConstraints,
    enhance: deleteEnhance,
    tainted: deleteTainted,
    submitting: deleteSubmitting,
    message: deleteMessage
  } = superForm(data.deleteForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.',
    flashMessage: {
      module: flashModule
    }
  });
  deleteMessage.subscribe(sendToast);
</script>

<ReturnLink href="/band/{data['band'].id}" />

{#if data.currentMembership?.isAdmin}
  <div class="p-2">
    <RightLink
      href="/band/{data.band.id}/edit/voice"
      label="Ajouter un pupitre"
    />
  </div>
{/if}

<List>
  {#if data.bandVoices.length == 0}
    <p class="text-xs">Shut ! vous entendez ? Le silence...</p>
  {:else}
    {#if $deleteBandVoiceErrors._errors}
      <p class="text-xs text-red-300">{$deleteBandVoiceErrors._errors}</p>
    {/if}
    {#each data.bandVoices as voice}
      <ListItem>
        <div class="flex w-full items-center justify-between">
          <p class="w-full rounded p-2 text-sm">
            {voice.instrument.name}
          </p>
          {#if data.currentMembership?.isAdmin}
            <form
              method="POST"
              action="?/deleteBandVoice"
              use:deleteBandVoiceEnhance
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
<form
  class="p-2 text-red-300"
  method="POST"
  action="?/delete"
  use:deleteEnhance
>
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
  <Text
    name="nameCopy"
    label="recopier le titre pour valider la suppression"
    bind:value={$deleteForm['nameCopy']}
    errors={$deleteErrors['nameCopy'] || []}
    constraints={$deleteConstraints['nameCopy'] || {}}
  />
  <DeleteButton
    label={'Supprimer'}
    disabled={$deleteSubmitting || !$deleteTainted}
  />
</form>
