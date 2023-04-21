<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { errors, enhance } = superForm(data.form);
</script>

<ReturnLink href="/roles" />

<div class="w-full p-2">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div class="grid grid-cols-2 gap-x-2 gap-y-2">
      <p class="col-span-2 text-xs">Ajouter un pupitre</p>
      <Select
        id="instrumentId"
        label="instrument"
      >
        {#each data.instruments as instrument}
          <option value={instrument.id}>
            {instrument.name}
          </option>
        {/each}
      </Select>
      <div class="col-span-2">
        <Checkbox
          name="playable"
          label="je gère mon pupitre"
        />
      </div>
      <input
        type="hidden"
        name="playerId"
        value={data.currentPlayer.id}
      />
      <div class="col-span-2">
        <Button label={'Ajouter'} />
      </div>
    </div>
  </Form>
</div>
