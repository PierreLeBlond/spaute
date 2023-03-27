<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { ActionData } from './$types';

  export let form: ActionData;
</script>

<ReturnLink href="/bands" />

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
