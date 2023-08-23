<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Text
        {form}
        field="email"
        label="email"
        autocomplete="email"
      />
      <Password
        {form}
        field="password"
        label="mot de passe"
        autocomplete="new-password"
      />
      <Password
        {form}
        field="passwordConfirmation"
        label="confirmation du mot de passe"
        autocomplete="new-password"
      />
      <Text
        {form}
        field="name"
        label="nom de fanfaronx"
        autocomplete="username"
      />
      <Button
        {form}
        label="S'inscrire"
      />
    </InputsLayout>
  </Form>
</FormLayout>
