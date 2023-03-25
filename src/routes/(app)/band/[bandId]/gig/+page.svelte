<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import DateInput from '$lib/components/forms/DateInput.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import type { ActionData, PageData } from './$types';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';

  export let data: PageData;
  export let form: ActionData;
</script>

<ReturnLink href="/band/{data.band.id}/gigs" />

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2 gap-x-2">
      <p class="col-span-2 text-xs">Ajouter une presta</p>
      <Text
        id="name"
        label="titre"
        value={form?.data?.name ?? ''}
        error={form?.errors?.name}
        maxlength={32}
      />
      <Text
        id="location"
        label="lieu"
        value={form?.data?.location ?? ''}
        error={form?.errors?.location}
        maxlength={60}
      />
      <DateInput
        id="date"
        label="date"
        value={form?.data?.date ? new Date(form.data.date) : new Date()}
        error={form?.errors?.date}
      />
      <div class="col-span-2">
        <Button label={'Créer'} />
      </div>
    </div>
  </Form>
</div>
