<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './code-validation/$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<p class="px-16 pt-8 text-center text-xs">
  Spaute a besoin de vérifier ton <b>email</b> en t'envoyant un <b>code de validation</b> !
</p>

<div class="flex w-full flex-col items-center justify-center p-8">
  <Form {form}>
    <div class="flex w-64 flex-col items-center justify-center">
      <Button
        {form}
        label="Envoyer"
      />
    </div>
  </Form>
</div>
