<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
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
  <ReturnLink href="/users/login" />
</div>

<p class="px-16 text-center text-xs">
  Pour te connecter, nous avons besoin de t'envoyer par <b>email</b> un
  <b>mot de passe</b> à <b>usage unique</b> !
</p>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Text
        {form}
        field="email"
        label="email"
        autocomplete="email"
      />
      <Button
        {form}
        label="Envoyer"
      />
    </InputsLayout>
  </Form>
</FormLayout>
