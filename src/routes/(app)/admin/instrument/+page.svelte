<script lang="ts">
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import type { ActionData } from './$types';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';

  export let form: ActionData;
</script>

<ReturnLink href="/admin/instruments" />

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2">
      <p class="col-span-2 w-full text-sm">Ajouter un instrument</p>
      <Text
        id="name"
        label="nom"
        value={form?.data?.name ?? ''}
        error={form?.errors?.name}
      />
      <div class="col-span-2">
        <Button label={'Ajouter'} />
      </div>
    </div>
  </Form>
</div>
