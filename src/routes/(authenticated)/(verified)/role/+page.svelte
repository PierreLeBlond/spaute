<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
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

<ReturnLink href="/roles" />

<div class="w-full p-2">
  <Form {form}>
    <div class="grid grid-cols-2 gap-x-2 gap-y-2">
      <p class="col-span-2 text-xs">Ajouter un pupitre</p>
      <Select
        {form}
        field={'instrumentId'}
        label={'instrument'}
        {options}
      />
      <div class="col-span-2">
        <Checkbox
          {form}
          field="playable"
          checkedLabel="je gère mon pupitre"
          uncheckedLabel="je gère pas encore"
        />
      </div>
      <input
        type="hidden"
        name="playerId"
        value={data.currentPlayer.id}
      />
      <div class="col-span-2">
        <Button
          {form}
          label="Ajouter"
        />
      </div>
    </div>
  </Form>
</div>
