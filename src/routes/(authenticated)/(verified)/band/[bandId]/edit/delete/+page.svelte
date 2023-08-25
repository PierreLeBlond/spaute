<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import * as flashModule from 'sveltekit-flash-message/client';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';
  import NavBar from '$lib/components/layout/NavBar.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.',
    flashMessage: {
      module: flashModule
    }
  });
</script>

<NavBar
  returnHref="/band/{data['band'].id}/edit"
  label={data.band.name}
/>

<p class="px-16 pt-8 text-center text-xs">
  Pour <b>supprimer la fanfare</b>, recopie son <b>nom</b> !
</p>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <input
        type="hidden"
        name="name"
        value={data.band.name}
      />
      <Text
        {form}
        field="nameCopy"
        label="nom"
      />
      <Button
        {form}
        label="Supprimer"
        danger
        disabledWhenNotTainted
      />
    </InputsLayout>
  </Form>
</FormLayout>
