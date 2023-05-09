<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import DeleteButton from '$lib/components/forms/DeleteButton.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const {
    form: updateForm,
    errors: updateErrors,
    constraints: updateConstraints,
    enhance: updateEnhance,
    tainted: updateTainted,
    submitting: updateSubmitting
  } = superForm(data.updateForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

  const {
    form: deleteForm,
    errors: deleteErrors,
    constraints: deleteConstraints,
    enhance: deleteEnhance,
    tainted: deleteTainted,
    submitting: deleteSubmitting
  } = superForm(data.deleteForm, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
</script>

<ReturnLink href="/band/{data.band.id}/gig/{data.gig.id}" />

<div class="w-full overflow-y-auto p-2">
  <Form
    action="?/update"
    errors={$updateErrors._errors || []}
    enhance={updateEnhance}
  >
    <div
      class="grid h-full grid-cols-2 gap-x-2 gap-y-2"
      style:grid-template-rows="auto auto auto 1fr auto"
    >
      <p class="col-span-2 text-xs">Modifier la presta</p>
      <Text
        name="name"
        label="titre"
        bind:value={$updateForm['name']}
        errors={$updateErrors['name'] || []}
        constraints={$updateConstraints['name'] || {}}
      />
      <Text
        name="location"
        label="lieu"
        bind:value={$updateForm['location']}
        errors={$updateErrors['location'] || []}
        constraints={$updateConstraints['location'] || {}}
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
  <form
    class="p-2 text-red-300"
    method="POST"
    action="?/delete"
    use:deleteEnhance
  >
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
      label="recopier le titre pour confirmer la suppression"
      bind:value={$deleteForm['nameCopy']}
      errors={$deleteErrors['nameCopy'] || []}
      constraints={$deleteConstraints['nameCopy'] || {}}
    />
    <DeleteButton
      label={'Supprimer'}
      disabled={$deleteSubmitting || !$deleteTainted}
    />
  </form>
</div>
