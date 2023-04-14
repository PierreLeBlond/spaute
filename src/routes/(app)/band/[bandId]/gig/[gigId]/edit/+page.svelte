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
  import { enhance } from '$app/forms';

  export let data: PageData;
  export let form: ActionData;

  const date = form?.updateData?.date ? DateTime.fromISO(form.updateData.date) : DateTime.fromJSDate(data.gig.date);
</script>

<ReturnLink href="/band/{data['band'].id}/gig/{data['gig'].id}" />

<div class="w-full overflow-y-auto p-2">
  <Form
    action="?/update"
    errors={[]}
    {enhance}
  >
    <div
      class="grid grid-cols-2 gap-x-2 gap-y-2"
      style:grid-template-rows="auto auto auto 1fr auto"
    >
      <p class="col-span-2 text-xs">Modifier la presta</p>
      <Text
        id="name"
        label="titre"
        value={form?.updateData?.name ?? data['gig'].name}
        errors={form?.updateErrors?.name || []}
      />
      <Text
        id="location"
        label="lieu"
        value={form?.updateData?.location ?? data['gig'].location}
        errors={form?.updateErrors?.location || []}
      />
      <DateInput
        id="date"
        label="date"
        {date}
        errors={form?.updateErrors?.date || []}
      />
      <TimeInput
        id="time"
        label="heure"
        {date}
        errors={form?.updateErrors?.date}
      />
      <div class="col-span-2 h-64">
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
  <form
    class="p-2 text-red-300"
    method="POST"
    action="?/delete&gigId={data['gig'].id}"
  >
    <Text
      id="confirm"
      label="recopier le titre pour confirmer la suppression"
      value={form?.confirmData?.confirm ?? ''}
      errors={form?.confirmErrors?.confirm || []}
    />
    <DeleteButton label={'Supprimer'} />
  </form>
</div>
