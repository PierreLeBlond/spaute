<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, submitting, message, tainted } = superForm(data.form, {
    taintedMessage: null,
    flashMessage: {
      module: flashModule
    }
  });
  message.subscribe(sendToast);
</script>

<div class="flex-col items-center justify-center p-8">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div class="flex flex-col items-center justify-center">
      <Password
        name={'password'}
        label={'nouveau mot de passe'}
        bind:value={$form['password']}
        errors={$errors['password'] || []}
        {...$constraints['password']}
      />
      <Password
        name={'passwordConfirmation'}
        label={'confirmation du mot de passe'}
        bind:value={$form['passwordConfirmation']}
        errors={$errors['passwordConfirmation'] || []}
        {...$constraints['passwordConfirmation']}
      />
      <div class="w-64 pt-2">
        <Button
          label="Mettre à jour"
          disabled={$submitting || !$tainted}
        />
      </div>
    </div>
  </Form>
</div>
