<script lang="ts">
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';
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
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import Delimiter from '$lib/components/layout/Delimiter.svelte';
  import NavBar from '$lib/components/layout/NavBar.svelte';
  import Rest from '$lib/components/logos/Rest.svelte';

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
</script>

<NavBar
  returnHref="/gig/{data.gig.id}"
  label={data.gig.name}
/>

<div class="overflow-y-auto">
  <p class="px-16 py-4 text-center text-xs font-bold">Modifier la presta</p>

  {#if hasWriteAccess}
    <FormLayout>
      <Form
        form={updateForm}
        action="?/update"
      >
        <InputsLayout>
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
          <TextArea
            form={updateForm}
            field="description"
            label="description"
          />
          <input
            type="hidden"
            name="gigId"
            value={data.gig.id}
          />
          <Button
            form={updateForm}
            label="Mettre à jour"
            disabledWhenNotTainted
          />
        </InputsLayout>
      </Form>
    </FormLayout>
  {/if}

  {#if data.band}
    <Delimiter></Delimiter>

    <p class="px-16 pt-8 text-center text-xs font-bold">
      Pupitres de la fanfare <i>{data.band.name}</i>
    </p>

    <List>
      {#if data.bandVoices.length == 0}
        <Rest></Rest>
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
                <Checkbox
                  form={updateDisabledVoiceForm}
                  name="enableds"
                  field="enableds[{index}]"
                  disabled={!data.currentPresence?.isOrganizer}
                />
              {/if}
            </div>
          </ListItem>
        {/each}
      {/if}
    </List>
    {#if hasWriteAccess}
      <FormLayout>
        <Form
          form={updateDisabledVoiceForm}
          action="?/updateDisabledVoice"
        >
          <InputsLayout>
            <input
              type="hidden"
              name="gigId"
              value={data.gig.id}
            />

            <Button
              form={updateDisabledVoiceForm}
              label={'Mettre à jour'}
              disabledWhenNotTainted
            />
          </InputsLayout>
        </Form>
      </FormLayout>
    {/if}
  {/if}

  <Delimiter></Delimiter>

  <h2 class="px-16 pt-8 text-center text-xs font-bold">Pupitres additionels</h2>

  <List>
    {#if data.gigVoices.length == 0}
      <Rest></Rest>
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
                    name="gigId"
                    value={voice.gigId}
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

  {#if hasWriteAccess}
    <div class="px-16 pb-8">
      <RightLink href="/gig/{data.gig.id}/edit/voice">Ajouter un pupitre</RightLink>
    </div>
  {/if}

  {#if hasWriteAccess}
    <Delimiter></Delimiter>

    <div class="px-16 py-8">
      <RightLink
        href="/gig/{data.gig.id}/edit/delete"
        danger>Supprimer la presta ?</RightLink
      >
    </div>
  {/if}
</div>
