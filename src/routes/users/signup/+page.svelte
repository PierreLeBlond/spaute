<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="flex w-full items-center justify-center p-8">
  <Form {form}>
    <div class="flex flex-col items-center justify-center pt-8">
      <Text
        {form}
        field="email"
        label="email"
      />
      <Password
        {form}
        field="password"
        label="mot de passe"
      />
      <Password
        {form}
        field="passwordConfirmation"
        label="confirmation du mot de passe"
      />
      <Text
        {form}
        field="name"
        label="nom de fanfaronx"
      />
      <Button
        {form}
        label="Sign up"
      />
    </div>
  </Form>
</div>
