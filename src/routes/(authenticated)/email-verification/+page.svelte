<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Link from '$lib/components/links/Link.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { errors, enhance, submitting, message } = superForm(data.form, {
    taintedMessage: null
  });
  message.subscribe(sendToast);
  const {
    form: passwordForm,
    errors: passwordErrors,
    enhance: passwordEnhance,
    submitting: passwordSubmitting,
    message: passwordMessage,
    constraints: passwordConstraints
  } = superForm(data.passwordForm, {
    taintedMessage: null
  });
  passwordMessage.subscribe(sendToast);
</script>

<div class="flex-col items-center justify-center p-8">
  {#if !data.emailVerified}
    <h1 class="text-center text-lg">Vérification de ton email</h1>
    <p class="pb-16 text-center text-xs">
      Spaute a besoin de vérifier ton adresse mail en envoyant un code de validation à l'adresse {data.email} !
    </p>

    <Form
      action={'?/send'}
      errors={$errors._errors || []}
      {enhance}
    >
      <h2 class="text-xs">Envoyer un code de validation</h2>
      <Button
        label="Envoyer"
        disabled={$submitting}
      />
    </Form>
    <Form
      action={'?/verify'}
      errors={$passwordErrors._errors || []}
      enhance={passwordEnhance}
    >
      <Text
        name={'password'}
        label={'code de validation'}
        bind:value={$passwordForm['password']}
        errors={$passwordErrors['password'] || []}
        constraints={$passwordConstraints['password']}
      />
      <Button
        label="Valider"
        disabled={$passwordSubmitting}
      />
    </Form>
  {:else}
    <h1 class="pb-8 text-center text-lg">Ton email est vérifié !</h1>
    <Link href={data.fromPathname}>Accéder à spaute</Link>
  {/if}
</div>
