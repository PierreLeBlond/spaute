<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
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
  <h1 class="text-center text-lg">Récupération du compte</h1>

  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <Text
      name={'email'}
      label={'email'}
      bind:value={$form['email']}
      errors={$errors['email'] || []}
      constraints={$constraints['email'] || {}}
    />
    <h2 class="text-xs">Envoyer un mail de récupération</h2>
    <Button
      label="Envoyer"
      disabled={$submitting || !$tainted}
    />
  </Form>
</div>
