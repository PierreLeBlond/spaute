<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { form, errors, constraints, enhance, tainted, submitting } = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
</script>

<ReturnLink href="/admin/instruments" />

<div class="w-full p-2">
  <Form
    errors={$errors._errors || []}
    {enhance}
  >
    <div class="grid grid-cols-2 gap-y-2">
      <p class="col-span-2 w-full text-sm">Ajouter un instrument</p>
      <Text
        name="name"
        label="nom"
        bind:value={$form['name']}
        errors={$errors['name'] || []}
        constraints={$constraints['name'] || {}}
      />
      <div class="col-span-2">
        <Button
          label={'Ajouter'}
          disabled={$submitting || !$tainted}
        />
      </div>
    </div>
  </Form>
</div>
