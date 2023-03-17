<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Date from '$lib/components/forms/Date.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import type { PageData } from './$types';
  import GigsPage from '$lib/components/GigsPage.svelte';

  export let data: PageData;

  $: presences = data.presences;
  $: newGigs = data.newGigs;
</script>

<GigsPage
  {presences}
  {newGigs}
/>

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2 gap-x-2">
      <p class="col-span-2 text-xs">Ajouter une presta</p>
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
