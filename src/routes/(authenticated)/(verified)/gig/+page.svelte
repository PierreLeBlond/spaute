<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form);

  $: options = [
    {
      value: '',
      label: 'Presta indépendante'
    },
    ...data.memberships.map((membership) => ({
      value: membership.band.id,
      label: membership.band.name
    }))
  ];
</script>

<div class="flex">
  <ReturnLink href="/gigs" />
</div>

<div class="w-full grow overflow-auto p-2">
  <Form {form}>
    <div
      class="grid h-full grid-cols-2 gap-x-2 gap-y-2"
      style:grid-template-rows="auto auto auto 1fr auto"
    >
      <p class="col-span-2 text-xs">Ajouter une presta</p>
      <Select
        {form}
        field="bandId"
        label="fanfare"
        {options}
      />
      <div class="col-span-1" />
      <Text
        {form}
        field="name"
        label="titre"
      />
      <Text
        {form}
        field="location"
        label="lieu"
      />
      <DateInput
        {form}
        field="date"
        label="date"
      />
      <TimeInput
        {form}
        field="time"
        label="heure"
      />
      <div class="col-span-2">
        <TextArea
          {form}
          field="description"
          label="description"
        />
      </div>
      <div class="col-span-2">
        <Button
          {form}
          label={'Créer'}
        />
      </div>
    </div>
  </Form>
</div>
