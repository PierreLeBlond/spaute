<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="flex">
  <ReturnLink href="/settings" />
</div>

<p class="px-16 text-center text-xs">
  Pour te créer un nouveau <b>mot de passe</b>, nous avons besoin vérifier ton identité en t'envoyant par <b>email</b>
  un
  <b>code de validation</b> !
</p>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Button
        {form}
        label="Envoyer"
      />
    </InputsLayout>
  </Form>
</FormLayout>
