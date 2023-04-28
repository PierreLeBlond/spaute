<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, submitting, message } = superForm(data.form, {
    taintedMessage: null
  });
  message.subscribe(sendToast);
</script>

<div class="flex w-full items-center justify-center p-8">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div class="flex flex-col items-center justify-center">
      <Text
        name={'email'}
        label={'email'}
        bind:value={$form['email']}
        errors={$errors['email'] || []}
        constraints={$constraints['email'] || {}}
      />
      <Password
        name={'password'}
        label={'mot de passe'}
        bind:value={$form['password']}
        errors={$errors['password'] || []}
        constraints={$constraints['password'] || {}}
      />
      <div class="w-full pt-2">
        <Button
          label="Log in"
          disabled={$submitting}
        />
      </div>
    </div>
  </Form>
</div>
