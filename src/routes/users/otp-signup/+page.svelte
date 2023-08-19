<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="flex">
  <ReturnLink href="/users/login" />
</div>

<p class="px-16 pt-8 text-center text-xs">
  Pour te connecter, nous avons besoin de t'envoyer par <b>email</b> un
  <b>mot de passe</b> à <b>usage unique</b> !
</p>

<div class="flex w-full flex-col items-center justify-center p-8">
  <Form {form}>
    <div class="flex flex-col items-center justify-center">
      <Text
        {form}
        field="email"
        label="email"
      />
      <Button
        {form}
        label="Envoyer"
      />
    </div>
  </Form>
</div>
