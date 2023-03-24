<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import type { ActionData, PageData } from './$types';

  export let data: PageData;
  export let form: ActionData;

  $: bands = data.bands;
</script>

<List>
  {#if bands.length == 0}
    <p class="text-xs">T'as pas de fanfare ? la tristesse...</p>
  {:else}
    {#each bands as band}
      <ListLinkItem>
        <a
          href="./band/{band.id}"
          class="flex w-full rounded p-2 text-sm"
        >
          {band.name}
        </a>
      </ListLinkItem>
    {/each}
  {/if}
</List>

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2">
      <h2 class="col-span-2 text-xs">Créer une fanfare</h2>
      <Text
        id={'name'}
        label={'nom'}
        value={form?.data?.name ?? ''}
        error={form?.errors?.name}
      />
      <div class="col-span-2">
        <Button label={'Créer'} />
      </div>
    </div>
  </Form>
</div>
