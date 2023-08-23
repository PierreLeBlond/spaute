<script lang="ts">
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
  import Link from '$lib/components/links/Link.svelte';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
</script>

<div class="flex">
  <ReturnLink href={'/gigs'} />
</div>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <input
        type="hidden"
        name="playerId"
        value={data.currentPlayer.id}
      />
      <Text
        {form}
        field="name"
        label="nom de fanfaronx"
        autocomplete="username"
      />
      <Button
        {form}
        label="Mettre à jour"
        disabledWhenNotTainted
      />
    </InputsLayout>
  </Form>
</FormLayout>

<div class="mx-8 flex flex-col justify-center p-8 border-t-2">
  <Link href="/settings/password-change">{data.user.hasPassword ? 'Changer de' : 'Créer un'} mot de passe</Link>
</div>
