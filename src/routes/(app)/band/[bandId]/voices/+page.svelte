<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { PageData } from './$types';
  import DeleteButton from '$lib/components/forms/DeleteButton.svelte';

  export let data: PageData;

  $: voices = data.voices;
  $: instruments = data.instruments;
</script>

<List>
  {#if voices.length == 0}
    <p class="text-xs">Shut ! vous entendez ? Le silence...</p>
  {:else}
    {#each voices as voice}
      <ListItem>
        <div class="flex w-full items-center justify-between">
          <p class="w-full rounded p-2 text-sm">
            {voice.instrument.name}
          </p>
          <DeleteButton
            icon={true}
            label="Supprimer"
            url="/api/voice/{voice.id}"
            backUrl="./voices"
          />
        </div>
      </ListItem>
    {/each}
  {/if}
</List>

<div class="w-full p-2 sm:w-96">
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
