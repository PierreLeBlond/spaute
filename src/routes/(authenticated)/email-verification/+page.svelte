<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './code-validation/$types';
  import FormLayout from '$lib/components/forms/FormLayout.svelte';
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';
  import Info from '$lib/components/layout/Info.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<Info>
  Spaute a besoin de vérifier ton <b>email</b> en t'envoyant un <b>code de validation</b> !
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
