<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, submitting, message, tainted } = superForm(data.form, {
    taintedMessage: null
  });
  message.subscribe(sendToast);
</script>

<div class="flex-col items-center justify-center p-8">
  <h1 class="text-center text-lg">Création du nouveau mot de passe</h1>

  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <Password
      name={'password'}
      label={'mot de passe'}
      bind:value={$form['password']}
      errors={$errors['password'] || []}
      constraints={$constraints['password'] || {}}
    />
    <Password
      name={'passwordConfirmation'}
      label={'confirmation du mot de passe'}
      bind:value={$form['passwordConfirmation']}
      errors={$errors['passwordConfirmation'] || []}
      constraints={$constraints['passwordConfirmation'] || {}}
    />
    <Button
      label="Mettre à jour"
      disabled={$submitting || !$tainted}
    />
  </Form>
</div>
