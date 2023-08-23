<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form);
  $: options = data.instruments.map((instrument) => ({
    value: instrument.id,
    label: instrument.name
  }));
</script>

<ReturnLink href="/gig/{data.gig.id}/edit" />

<h2 class="text-xs text-center px-16 py-8 font-bold">Ajouter un pupitre</h2>

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
        name="gigId"
        value={data.gig.id}
      />
      <Button
        {form}
        label="Ajouter"
      />
    </InputsLayout>
  </Form>
</FormLayout>
