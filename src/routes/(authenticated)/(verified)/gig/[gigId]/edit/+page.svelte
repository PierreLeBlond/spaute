<script lang="ts">
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';
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
  import FormLayout from '$lib/components/forms/FormLayout.svelte';
  import Delimiter from '$lib/components/layout/Delimiter.svelte';
  import Rest from '$lib/components/logos/Rest.svelte';
  import Title from '$lib/components/layout/Title.svelte';

  export let data: PageData;

  const updateForm = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  const updateDisabledVoicePayloads = data.updateDisabledVoicePayloads.map(({ bandVoice, form }) => ({
    bandVoice,
    form: superForm(form, {
      taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.',
      id: bandVoice.id
    })
  }));

  const deleteGigVoiceForm = superForm(data.deleteGigVoiceForm);
</script>

<div
  class="grid w-full md:grid-cols-2"
  class:md:grid-cols-3={data.band}
>
  <section class="flex flex-col items-center">
    <Title>Modifier la presta</Title>
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
  </section>

  {#if data.band}
    <section class="flex flex-col items-center">
      <div class="block w-full md:hidden">
        <Delimiter></Delimiter>
      </div>

      <Title>
        Pupitres de la fanfare {data.band.name}
      </Title>

      <List>
        {#if data.bandVoices.length == 0}
          <Rest></Rest>
        {:else}
          {#each updateDisabledVoicePayloads as updateDisabledVoicePayload}
            <ListItem>
              <div class="flex w-full items-center justify-between">
                <p class="w-full rounded text-sm">
                  {updateDisabledVoicePayload.bandVoice.instrument.name}
                </p>
                <Form
                  form={updateDisabledVoicePayload.form}
                  action="?/updateDisabledVoice"
                  submitOnChange
                  hideErrors
                >
                  <input
                    type="hidden"
                    name="gigId"
                    value={data.gig.id}
                  />
                  <input
                    type="hidden"
                    name="bandVoiceId"
                    value={updateDisabledVoicePayload.bandVoice.id}
                  />
                  <Checkbox
                    form={updateDisabledVoicePayload.form}
                    name="enabled"
                    field="enabled"
                  />
                </Form>
              </div>
            </ListItem>
          {/each}
        {/if}
      </List>
    </section>
  {/if}

  <section class="flex flex-col items-center">
    <div class="block w-full md:hidden">
      <Delimiter></Delimiter>
    </div>

    <Title>Pupitres additionels</Title>

    <RightLink href="/gig/{data.gig.id}/edit/voice">Ajouter un pupitre</RightLink>

    <List>
      {#if data.gigVoices.length == 0}
        <Rest></Rest>
      {:else}
        {#each data.gigVoices as voice}
          <ListItem>
            <div class="flex w-full items-center justify-between">
              <p class="w-full rounded text-sm">
                {voice.instrument.name}
              </p>
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
            </div>
          </ListItem>
        {/each}
      {/if}
    </List>

    <Delimiter></Delimiter>

    <RightLink
      href="/gig/{data.gig.id}/edit/delete"
      danger>Supprimer la presta ?</RightLink
    >
  </section>
</div>
