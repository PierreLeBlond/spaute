<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Checkbox from '$lib/components/forms/Checkbox.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { ActionData, PageData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  $: instruments = data.instruments;
</script>

<ReturnLink href="/roles" />

<div class="w-full p-2">
  <Form>
    <div class="grid grid-cols-2 gap-x-2 gap-y-2">
      <p class="col-span-2 text-xs">Ajouter un pupitre</p>
      <Select
        id="instrumentId"
        label="instrument"
        errors={form?.errors?.instrument}
      >
        {#each instruments as instrument, index}
          <option
            value={instrument.id}
            selected={form?.data?.instrument ? form?.data?.instrument?.connect?.id == instrument.id : index == 0}
          >
            {instrument.name}
          </option>
        {/each}
      </Select>
      <div class="col-span-2">
        <Checkbox
          id="playable"
          label="je gère mon pupitre"
          checked={form?.data?.playable}
        />
      </div>
      <div class="col-span-2">
        <Button label={'Ajouter'} />
      </div>
    </div>
  </Form>
</div>
