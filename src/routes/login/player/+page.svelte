<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<ReturnLink href="/login" />

<div class="w-full p-2 sm:w-96">
  <Form>
    <div class="grid grid-cols-2 gap-y-2 pt-2">
      <h2 class="col-span-2 w-full text-xs">
        <p>Ajouter un musicien</p>
      </h2>
      <Text
        id={'name'}
        label={'nom'}
        value={form?.data?.name ?? ''}
        error={form?.errors?.name}
      />
      <div class="col-span-2">
        <Button label="Ajouter" />
      </div>
    </div>
  </Form>
</div>
