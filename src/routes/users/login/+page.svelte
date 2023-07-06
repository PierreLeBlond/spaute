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
    <div class="flex flex-col items-center justify-center">
      <Text
        {form}
        field="email"
        label="email"
      />
      <Password
        {form}
        field={'password'}
        label={'mot de passe'}
      />
      <div class="w-64 pt-2">
        <Button
          label="Log in"
          {form}
        />
        <a
          class="text-sm text-cyan-600"
          href="/users/password-reset">Mot de passe oublié ?</a
        >
      </div>
    </div>
  </Form>
</div>
