<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import FormLayout from '$lib/components/forms/FormLayout.svelte';
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';
  import Info from '$lib/components/layout/Info.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<Info>
  Pour te créer un nouveau <b>mot de passe</b>, nous avons besoin vérifier ton identité en t'envoyant par <b>email</b>
  un
  <b>code de validation</b> !
</Info>

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
