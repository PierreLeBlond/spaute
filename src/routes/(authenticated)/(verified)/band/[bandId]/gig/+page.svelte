<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';

  export let data: PageData;

  const { form, errors, constraints, enhance, tainted, submitting, message } = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
  message.subscribe(sendToast);
</script>

<ReturnLink href="/band/{data.band.id}/gigs" />

<div class="w-full grow p-2">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div
      class="grid h-full grid-cols-2 gap-x-2 gap-y-2"
      style:grid-template-rows="auto auto auto 1fr auto"
    >
      <p class="col-span-2 text-xs">Ajouter une presta</p>
      <Text
        name="name"
        label="titre"
        bind:value={$form['name']}
        errors={$errors['name'] || []}
        constraints={$constraints['name'] || {}}
      />
      <Text
        name="location"
        label="lieu"
        bind:value={$form['location']}
        errors={$errors['location'] || []}
        constraints={$constraints['location'] || {}}
      />
      <DateInput
        name="date"
        label="date"
        bind:value={$form['date']}
        errors={$errors['date'] || []}
      />
      <TimeInput
        name="time"
        label="heure"
        bind:value={$form['time']}
        errors={$errors['time'] || []}
      />
      <div class="col-span-2">
        <TextArea
          name="description"
          label="description"
          bind:value={$form['description']}
        />
      </div>
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <div class="col-span-2">
        <Button
          label={'Créer'}
          disabled={$submitting || !$tainted}
        />
      </div>
    </div>
  </Form>
</div>
