<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { enhance, errors, message } = superForm(data.form);
  message.subscribe(sendToast);
</script>

<ReturnLink href="/band/{data.band.id}/voices" />

<div class="w-full p-2">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div class="grid grid-cols-1 gap-y-2">
      <h2 class="text-xs">Ajouter un pupitre</h2>
      <Select
        id={'instrumentId'}
        label={'instrument'}
      >
        {#each data.instruments as instrument}
          <option value={instrument.id}>
            {instrument.name}
          </option>
        {/each}
      </Select>
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <Button label={'Ajouter'} />
    </div>
  </Form>
</div>
