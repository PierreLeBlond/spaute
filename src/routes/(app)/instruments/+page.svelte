<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: instruments = data.instruments;
</script>

<List>
  {#each instruments as instrument}
    <ListItem>
      <p class="p-2 text-sm">{instrument.name}</p>
    </ListItem>
  {/each}
</List>

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2">
      <p class="col-span-2 w-full text-sm">Ajouter un instrument</p>
      <Text
        id="name"
        label="nom"
      />
      <div class="col-span-2">
        <Button label={'Ajouter'} />
      </div>
    </div>
  </Form>
</div>
