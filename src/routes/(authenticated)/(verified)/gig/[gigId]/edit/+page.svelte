<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const hasWriteAccess = data.currentPresence?.isOrganizer || data.currentMembership?.isAdmin;

  const updateForm = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  const updateDisabledVoiceForm = superForm(data.updateDisabledVoiceForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  const { form } = updateDisabledVoiceForm;

  const deleteGigVoiceForm = superForm(data.deleteGigVoiceForm);

  const deleteForm = superForm(data.deleteForm, {
    flashMessage: {
      module: flashModule
    }
  });
</script>

<div class="flex">
  <ReturnLink href="/gig/{data.gig.id}" />
</div>

<div class="w-full overflow-y-auto p-2">
  {#if hasWriteAccess}
    <Form
      form={updateForm}
      action="?/update"
    >
      <div
        class="grid h-full grid-cols-2 gap-x-2 gap-y-2"
        style:grid-template-rows="auto auto auto 1fr auto"
      >
        <p class="col-span-2 text-xs text-neutral-600">Modifier la presta</p>
        <Text
          form={updateForm}
          field="name"
          label="titre"
        />
        <Text
          form={updateForm}
          field="location"
          label="lieu"
        />
        <DateInput
          form={updateForm}
          field="date"
          label="date"
        />
        <TimeInput
          form={updateForm}
          field="time"
          label="heure"
        />
        <div class="col-span-2">
          <TextArea
            form={updateForm}
            field="description"
            label="description"
          />
        </div>
        <input
          type="hidden"
          name="gigId"
          value={data.gig.id}
        />
        <div class="col-span-2">
          <Button
            form={updateForm}
            label="Mettre à jour"
            disabledWhenNotTainted={true}
          />
        </div>
      </div>
    </Form>
  {/if}

  {#if data.gig.band}
    <h2 class="pb-2 text-xs">
      Pupitres de la fanfare <i>{data.gig.band.name}</i>
    </h2>

    <div class="pb-2" />
    {#if hasWriteAccess}
      <Form
        form={updateDisabledVoiceForm}
        action="?/updateDisabledVoice"
      >
        <input
          type="hidden"
          name="gigId"
          value={data.gig.id}
        />
        <List>
          {#if data.bandVoices.length == 0}
            <p class="text-xs">La fanfare n'a pas de pupitres :(</p>
          {:else}
            {#each data.bandVoices as bandVoice, index}
              <ListItem>
                <div class="flex w-full items-center justify-between">
                  <p
                    class="w-full rounded p-2 text-sm"
                    class:text-neutral-500={!$form.enableds[index]}
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
                        form={updateDisabledVoiceForm}
                        name="enableds"
                        field="enableds[{index}]"
                        disabled={!data.currentPresence?.isOrganizer}
                      />
                    </div>
                  {/if}
                </div>
              </ListItem>
            {/each}
          {/if}
        </List>
        <div class="col-span-6">
          <Button
            form={updateDisabledVoiceForm}
            label={'Mettre à jour'}
            disabledWhenNotTainted={true}
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
                <Form
                  form={deleteGigVoiceForm}
                  action="?/deleteGigVoice"
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
                </Form>
              {/if}
            </div>
          </ListItem>
        {/each}
      {/if}
    </List>
  </div>

  {#if hasWriteAccess}
    <div class="border border-red-500 p-2 text-red-500">
      <Form
        form={deleteForm}
        action="?/delete"
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
          form={deleteForm}
          field="nameCopy"
          label="recopie son titre pour valider la suppression"
        />
        <Button
          form={deleteForm}
          label="Supprimer"
          deleting={true}
          disabledWhenNotTainted={true}
        />
      </Form>
    </div>
  {/if}
</div>
