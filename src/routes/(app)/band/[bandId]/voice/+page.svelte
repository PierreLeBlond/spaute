<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import type { PageData } from './$types';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';

  export let data: PageData;

  $: instruments = data.instruments;
</script>

<ReturnLink href="/band/{data.band.id}/voices" />

<div class="w-full p-2">
  <Form>
    <div class="grid grid-cols-1 gap-y-2">
      <h2 class="text-xs">Ajouter un pupitre</h2>
      <Select
        id={'instrumentId'}
        label={'instrument'}
      >
        {#each instruments as instrument}
          <option value={instrument.id}>
            {instrument.name}
          </option>
        {/each}
      </Select>
      <Button label={'Ajouter'} />
    </div>
  </Form>
</div>
