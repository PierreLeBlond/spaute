<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Link from '$lib/components/links/Link.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
  const passwordForm = superForm(data.passwordForm, {
    taintedMessage: null
  });
</script>

<div class="flex-col items-center justify-center p-8">
  {#if !data.emailVerified}
    <h1 class="text-center text-lg">Vérification de ton email</h1>
    <p class="pb-16 text-center text-xs">
      Spaute a besoin de vérifier ton adresse mail en envoyant un code de validation à l'adresse {data.email} !
    </p>

    <Form
      {form}
      action="?/send"
    >
      <h2 class="text-xs">Envoyer un code de validation</h2>
      <Button
        {form}
        label="Envoyer"
      />
    </Form>
    <Form
      form={passwordForm}
      action="?/verify"
    >
      <Text
        form={passwordForm}
        field="password"
        label="code de validation"
      />
      <Button
        form={passwordForm}
        label="Valider"
      />
    </Form>
  {:else}
    <h1 class="pb-8 text-center text-lg">Ton email est vérifié !</h1>
    <Link href={data.fromPathname}>Accéder à spaute</Link>
  {/if}
</div>
