<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import Password from '$lib/components/forms/Password.svelte';
  import Text from '$lib/components/forms/Text.svelte';
  import Link from '$lib/components/links/Link.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form, {
    taintedMessage: null
  });
</script>

<div class="mx-8 flex flex-col justify-center px-16 pb-8 pt-16">
  <p class="pb-2 text-center text-xs">Login avec <b>mot de passe</b> à <b>usage unique</b> :</p>
  <Link href="/users/otp-signup">Mot de passe unique</Link>
</div>

<div class="grid w-full grid-cols-7 items-center justify-center px-8">
  <p class="col-span-3 border-b" />
  <p class="col-span-1 text-center text-sm">ou</p>
  <p class="col-span-3 border-b" />
</div>

<div class="flex w-full items-center justify-center p-8">
  <Form {form}>
    <div class="flex flex-col items-center justify-center">
      <Text
        {form}
        field="email"
        label="email"
      />
      <Password
        {form}
        field={'password'}
        label={'mot de passe'}
      />
      <Button
        label="Log in"
        {form}
      />
      <a
        class="w-full text-start text-sm text-cyan-600"
        href="/users/password-reset">Mot de passe oublié ?</a
      >
    </div>
  </Form>
</div>
