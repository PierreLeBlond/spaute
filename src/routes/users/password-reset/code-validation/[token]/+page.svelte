<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null,
    flashMessage: {
      module: flashModule
    }
  });
</script>

<div class="flex">
  <ReturnLink href={`/users/password-reset/code-validation?email=${data.email}`} />
</div>

<div class="flex-col items-center justify-center p-8">
  <Form {form}>
    <div class="flex flex-col items-center justify-center">
      <Password
        {form}
        field={'password'}
        label={'nouveau mot de passe'}
      />
      <Password
        {form}
        field={'passwordConfirmation'}
        label={'confirmation du mot de passe'}
      />
      <div class="w-64 pt-2">
        <Button
          {form}
          label="Mettre à jour"
        />
      </div>
    </div>
  </Form>
</div>
