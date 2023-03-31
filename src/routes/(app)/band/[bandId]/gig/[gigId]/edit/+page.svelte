<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import type { ActionData, PageData } from './$types';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import DeleteButton from '$lib/components/forms/DeleteButton.svelte';
  import { DateTime } from 'luxon';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';

  export let data: PageData;
  export let form: ActionData;

  const date = form?.updateData?.date ? DateTime.fromISO(form.updateData.date) : DateTime.fromJSDate(data.gig.date);
</script>

<ReturnLink href="/band/{data['band'].id}/gig/{data['gig'].id}" />

<div class="w-full grow p-2 sm:w-96">
  <Form action="?/update">
    <div
      class="grid h-full grid-cols-2 gap-y-2 gap-x-2"
      style:grid-template-rows="auto auto auto 1fr auto"
    >
      <p class="col-span-2 text-xs">Modifier la presta</p>
      <Text
        id="name"
        label="titre"
        value={form?.updateData?.name ?? data['gig'].name}
        error={form?.updateErrors?.name}
        maxlength={32}
      />
      <Text
        id="location"
        label="lieu"
        value={form?.updateData?.location ?? data['gig'].location}
        error={form?.updateErrors?.location}
        maxlength={60}
      />
      <DateInput
        id="date"
        label="date"
        {date}
        error={form?.updateErrors?.date}
      />
      <TimeInput
        id="time"
        label="heure"
        {date}
        error={form?.updateErrors?.date}
      />
      <div class="col-span-2">
        <TextArea
          id="description"
          label="description"
          value={form?.updateData?.description ?? data['gig'].description ?? ''}
        />
      </div>
      <div class="col-span-2">
        <Button label={'Mettre à jour'} />
      </div>
    </div>
  </Form>
</div>
<div class="w-full p-2 sm:w-96">
  <form
    class="p-2 text-red-300"
    method="POST"
    action="?/delete&gigId={data['gig'].id}"
  >
    <Text
      id="confirm"
      label="recopier le titre pour confirmer la suppression"
      value={form?.confirmData?.confirm ?? ''}
      error={form?.confirmErrors?.confirm}
      maxlength={32}
    />
    <DeleteButton label={'Supprimer'} />
  </form>
</div>
