<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, submitting, message, tainted } = superForm(data.form, {
    taintedMessage: null
  });
  message.subscribe(sendToast);
</script>

<div class="flex">
  <ReturnLink href="/users/login" />
</div>

<div class="flex w-full flex-col items-center justify-center p-8">
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
      <div class="w-64 pt-2">
        <h2 class="text-xs">Envoyer un mail de récupération</h2>
        <Button
          label="Envoyer"
          disabled={$submitting || !$tainted}
        />
      </div>
    </div>
  </Form>
</div>
