<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form);
  $: options = data.instruments.map((instrument) => ({
    value: instrument.id,
    label: instrument.name
  }));
</script>

<ReturnLink href="/gig/{data.gig.id}/edit" />

<div class="w-full p-2">
  <Form {form}>
    <div class="grid grid-cols-1 gap-y-2">
      <h2 class="text-xs">Ajouter un pupitre</h2>
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
    </div>
  </Form>
</div>
