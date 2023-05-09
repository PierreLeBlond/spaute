<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Link from '$lib/components/links/Link.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { errors, enhance, submitting, message } = superForm(data.form, {
    taintedMessage: null
  });
  message.subscribe(sendToast);
</script>

<div class="flex-col items-center justify-center p-8">
  {#if !data.emailVerified}
    <h1 class="text-center text-lg">Vérification de ton email</h1>
    <p class="pb-16 text-center text-xs">
      Spaute a besoin de vérifier ton adresse mail en envoyant un lien de validation à l'adresse {data.email} !
    </p>

    <Form
      errors={$errors._errors || []}
      {enhance}
    >
      <h2 class="text-xs">Envoyer un mail de validation</h2>
      <Button
        label="Envoyer"
        disabled={$submitting}
      />
    </Form>
  {:else}
    <h1 class="pb-8 text-center text-lg">Ton email est vérifié !</h1>
    <Link href={data.fromPathname}>Accéder à spaute</Link>
  {/if}
</div>
