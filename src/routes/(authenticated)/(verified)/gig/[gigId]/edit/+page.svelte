<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import DeleteButton from '$lib/components/forms/DeleteButton.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const hasWriteAccess = data.currentPresence?.isOrganizer || data.currentMembership?.isAdmin;

  const {
    form: updateForm,
    errors: updateErrors,
    constraints: updateConstraints,
    enhance: updateEnhance,
    tainted: updateTainted,
    submitting: updateSubmitting,
    message: updateMessage
  } = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
  updateMessage.subscribe(sendToast);

  const {
    form: updateDisabledVoiceForm,
    errors: updateDisabbledVoiceErrors,
    enhance: updateDisabledVoiceEnhance,
    tainted: updateDisabledVoiceTainted,
    submitting: updateDisabledVoiceSubmitting,
    message: updateDisabledVoiceMessage
  } = superForm(data.updateDisabledVoiceForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
  updateDisabledVoiceMessage.subscribe(sendToast);

  const { enhance: deleteGigVoiceEnhance, message: deleteGigVoiceMessage } = superForm(data.deleteGigVoiceForm);
  deleteGigVoiceMessage.subscribe(sendToast);

  const {
    form: deleteForm,
    errors: deleteErrors,
    constraints: deleteConstraints,
    enhance: deleteEnhance,
    submitting: deleteSubmitting,
    message: deleteMessage
  } = superForm(data.deleteForm, {
    flashMessage: {
      module: flashModule
    }
  });
  deleteMessage.subscribe(sendToast);
</script>

<div class="flex">
  <ReturnLink href="/gig/{data.gig.id}" />
</div>

<div class="w-full overflow-y-auto p-2">
  {#if hasWriteAccess}
    <Form
      action="?/update"
      errors={$updateErrors._errors || []}
      enhance={updateEnhance}
    >
      <div
        class="grid h-full grid-cols-2 gap-x-2 gap-y-2"
        style:grid-template-rows="auto auto auto 1fr auto"
      >
        <p class="col-span-2 text-xs text-neutral-600">Modifier la presta</p>
        <Text
          name="name"
          label="titre"
          bind:value={$updateForm['name']}
          errors={$updateErrors['name'] || []}
          constraints={$updateConstraints['name']}
        />
        <Text
          name="location"
          label="lieu"
          bind:value={$updateForm['location']}
          errors={$updateErrors['location'] || []}
          constraints={$updateConstraints['location']}
        />
        <DateInput
          name="date"
          label="date"
          bind:value={$updateForm['date']}
          errors={$updateErrors['date'] || []}
        />
        <TimeInput
          name="time"
          label="heure"
          bind:value={$updateForm['time']}
          errors={$updateErrors['time'] || []}
        />
        <div class="col-span-2">
          <TextArea
            name="description"
            label="description"
            bind:value={$updateForm['description']}
          />
        </div>
        <input
          type="hidden"
          name="gigId"
          value={data.gig.id}
        />
        <div class="col-span-2">
          <Button
            label={'Mettre à jour'}
            disabled={$updateSubmitting || !$updateTainted}
          />
        </div>
      </div>
    </Form>
  {/if}

  {#if data.gig.band}
    <h2 class="pb-2 text-xs">
      Pupitres de la fanfare <i>{data.gig.band.name}</i>
    </h2>

    <div class="pb-2">
      <List>
        {#if data.bandVoices.length == 0}
          <p class="text-xs">La fanfare n'a pas de pupitres :(</p>
        {:else}
          {#each data.bandVoices as bandVoice, index}
            <ListItem>
              <div class="flex w-full items-center justify-between">
                <p
                  class="w-full rounded p-2 text-sm"
                  class:text-neutral-500={!$updateDisabledVoiceForm['enableds'][index]}
                >
                  {bandVoice.instrument.name}
                </p>
                {#if hasWriteAccess}
                  <input
                    form="updateDisabledVoiceForm"
                    type="hidden"
                    name="bandVoiceIds"
                    value={bandVoice.id}
                  />
                  <div class="col-span-6">
                    <Checkbox
                      form="updateDisabledVoiceForm"
                      name="enableds"
                      label=""
                      disabled={!data.currentPresence?.isOrganizer}
                      bind:checked={$updateDisabledVoiceForm['enableds'][index]}
                    />
                  </div>
                {/if}
              </div>
            </ListItem>
          {/each}
        {/if}
      </List>
    </div>
    {#if hasWriteAccess}
      <Form
        id="updateDisabledVoiceForm"
        action="?/updateDisabledVoice"
        errors={$updateDisabbledVoiceErrors._errors || []}
        enhance={updateDisabledVoiceEnhance}
      >
        <input
          type="hidden"
          name="gigId"
          value={data.gig.id}
        />
        <div class="col-span-6">
          <Button
            label={'Mettre à jour'}
            disabled={$updateDisabledVoiceSubmitting || !$updateDisabledVoiceTainted}
          />
        </div>
      </Form>
    {/if}
  {/if}

  <h2 class="text-xs">Pupitres additionels</h2>

  {#if hasWriteAccess}
    <div class="py-2">
      <RightLink
        href="/gig/{data.gig.id}/edit/voice"
        label="Ajouter un pupitre"
      />
    </div>
  {/if}

  <div class="pb-2">
    <List>
      {#if data.gigVoices.length == 0}
        <p class="text-xs">La presta n'a pas de pupitres additionnels !</p>
      {:else}
        {#each data.gigVoices as voice}
          <ListItem>
            <div class="flex w-full items-center justify-between">
              <p class="w-full rounded p-2 text-sm">
                {voice.instrument.name}
              </p>
              {#if hasWriteAccess}
                <form
                  method="POST"
                  action="?/deleteGigVoice"
                  use:deleteGigVoiceEnhance
                >
                  <input
                    type="hidden"
                    name="id"
                    value={voice.id}
                  />
                  <input
                    type="hidden"
                    name="gigId"
                    value={voice.gigId}
                  />
                  <DeleteButtonIcon />
                </form>
              {/if}
            </div>
          </ListItem>
        {/each}
      {/if}
    </List>
  </div>

  {#if hasWriteAccess}
    <form
      class="border border-red-500 p-2 text-red-500"
      method="POST"
      action="?/delete"
      use:deleteEnhance
    >
      <p class="text-xs">Suppression de la presta</p>
      <input
        type="hidden"
        name="gigId"
        value={data.gig.id}
      />
      <input
        type="hidden"
        name="name"
        value={data.gig.name}
      />
      <Text
        name="nameCopy"
        label="recopie son titre pour valider la suppression"
        bind:value={$deleteForm['nameCopy']}
        errors={$deleteErrors['nameCopy'] || []}
        constraints={$deleteConstraints['nameCopy']}
      />
      <DeleteButton
        label={'Supprimer'}
        disabled={$deleteSubmitting}
      />
    </form>
  {/if}
</div>
