<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
</script>

<div class="flex">
  <ReturnLink href="/bands" />
</div>

<div class="w-full p-2">
  <Form {form}>
    <div class="grid grid-cols-2 gap-y-2">
      <h2 class="col-span-2 text-xs">Créer une fanfare</h2>
      <Text
        {form}
        field="name"
        label="nom"
      />
      <div class="col-span-2">
        <Button
          {form}
          label="Créer"
          disabledWhenNotTainted={true}
        />
      </div>
    </div>
  </Form>
</div>
