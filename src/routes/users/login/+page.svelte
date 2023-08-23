<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Link from '$lib/components/links/Link.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="flex flex-col justify-center px-16 py-8">
  <p class="pb-2 text-center text-xs">Connexion avec <b>mot de passe</b> à <b>usage unique</b></p>
  <RightLink href="/users/otp-signup">Se connecter</RightLink>
</div>

<div class="grid w-full grid-cols-7 items-center justify-center px-8">
  <p class="col-span-3 border-b" />
  <p class="col-span-1 text-center text-sm">ou</p>
  <p class="col-span-3 border-b" />
</div>

<FormLayout>
  <Form {form}>
    <InputsLayout>
      <Text
        {form}
        field="email"
        label="email"
        autocomplete="email"
      />
      <Password
        {form}
        field="password"
        label="mot de passe"
        autocomplete="current-password"
      />
      <Button
        label="Se connecter"
        {form}
      />
      <a
        class="w-full text-start text-sm text-cyan-600 pt-2"
        href="/users/password-reset">Mot de passe oublié ?</a
      >
    </InputsLayout>
  </Form>
</FormLayout>
