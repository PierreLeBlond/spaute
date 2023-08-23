<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="flex">
  <ReturnLink href="/users/password-reset" />
</div>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Text
        {form}
        field="password"
        label="code de validation"
      />
      <input
        type="hidden"
        name="email"
        value={data.email}
      />
      <Button
        {form}
        label="Valider"
      />
    </InputsLayout>
  </Form>
</FormLayout>
