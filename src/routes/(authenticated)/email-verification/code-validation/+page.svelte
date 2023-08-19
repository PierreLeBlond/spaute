<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="flex">
  <ReturnLink href="/email-verification" />
</div>

<div class="flex w-full flex-col items-center justify-center p-8">
  <Form {form}>
    <div class="flex flex-col items-center justify-center pt-8">
      <Text
        {form}
        field="password"
        label="code de validation"
      />
      <Button
        {form}
        label="Valider"
      />
    </div>
  </Form>
</div>
