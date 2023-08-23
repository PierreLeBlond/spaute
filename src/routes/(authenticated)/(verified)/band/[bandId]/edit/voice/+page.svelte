<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form);

  $: options = data.instruments.map((instrument) => ({
    value: instrument.id,
    label: instrument.name
  }));
</script>

<div class="flex">
  <ReturnLink href="/band/{data.band.id}/edit" />
</div>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Select
        {form}
        field={'instrumentId'}
        label={'instrument'}
        {options}
      />
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <Button
        {form}
        label="Ajouter"
      />
    </InputsLayout>
  </Form>
</FormLayout>
