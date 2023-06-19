<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, submitting, tainted, message } = superForm(data.form);
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
        {...$constraints['email']}
      />
      <Password
        name={'password'}
        label={'mot de passe'}
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
      <Text
        name={'name'}
        label={'nom de fanfaronx'}
        bind:value={$form['name']}
        errors={$errors['name'] || []}
        {...$constraints['name']}
      />
      <div class="w-64 pt-2">
        <Button
          label="Sign up"
          disabled={$submitting || !$tainted}
        />
      </div>
    </div>
  </Form>
</div>
