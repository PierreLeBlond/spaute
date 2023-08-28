<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import TextArea from '$lib/components/forms/TextArea.svelte';
  import TimeInput from '$lib/components/forms/TimeInput.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/forms/FormLayout.svelte';
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });

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

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Select
        {form}
        field="bandId"
        label="fanfare"
        {options}
      />
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
      <TextArea
        {form}
        field="description"
        label="description"
      />
      <Button
        {form}
        label={'Créer'}
        disabledWhenNotTainted
      />
    </InputsLayout>
  </Form>
</FormLayout>
