<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, tainted, submitting, message } = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.',
    onError: () => {
      sendToast('Erreur du serveur :(');
    }
  });
  message.subscribe(sendToast);
</script>

<div class="flex">
  <ReturnLink href="/bands" />
</div>

<div class="w-full p-2">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div class="grid grid-cols-2 gap-y-2">
      <h2 class="col-span-2 text-xs">Créer une fanfare</h2>
      <Text
        name="name"
        label="nom"
        bind:value={$form['name']}
        errors={$errors['name'] || []}
        constraints={$constraints['name'] || {}}
      />
      <div class="col-span-2">
        <Button
          label={'Créer'}
          disabled={$submitting || !$tainted}
        />
      </div>
    </div>
  </Form>
</div>
