<script lang="ts">
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Button from '$lib/components/forms/Button.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import type { PageData } from './$types';
  import { superForm } from 'sveltekit-superforms/client';
    
  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
</script>

<div class="flex">
  <ReturnLink href={'/gigs'} />
</div>

<div class="flex w-full items-center justify-center p-8">
  <Form {form}>
    <div class="flex flex-col items-center justify-center pt-8">
      <input
        type="hidden"
        name="playerId"
        value={data.currentPlayer.id}
      />
      <Text
        {form}
        field="name"
        label="nom de fanfaronx"
      />
      <Button
        {form}
        label="Mettre à jour"
        disabledWhenNotTainted
      />
    </div>
  </Form>
</div>

