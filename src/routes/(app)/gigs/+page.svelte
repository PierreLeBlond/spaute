<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Select from '$lib/components/forms/Select.svelte';
  import Date from '$lib/components/forms/Date.svelte';
  import GigView from '$lib/components/GigView.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import type { PageData } from './$types';
  import GigsPage from '$lib/components/GigsPage.svelte';

  export let data: PageData;

  $: presences = data.presences;
  $: newGigs = data.newGigs;
  $: bands = data.bands;
</script>

<GigsPage
  {presences}
  {newGigs}
/>

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2 gap-x-2">
      <p class="col-span-2 text-xs">Ajouter une presta</p>
      <Select
        id="bandId"
        label="fanfare"
      >
        {#each bands as band}
          <option value={band.id}>
            {band.name}
          </option>
        {/each}
      </Select>
      <Text
        id="name"
        label="titre"
      />
      <Text
        id="location"
        label="lieu"
      />
      <Date
        id="date"
        label="date"
      />
      <div class="col-span-2">
        <Button label={'Créer'} />
      </div>
    </div>
  </Form>
</div>
