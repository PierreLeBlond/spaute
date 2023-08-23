<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<ReturnLink href="/band/{data['band'].id}" />

<p class="px-16 pt-8 text-center text-xs">
  <b>{data.player.name}</b>
</p>

{#if !data.membership?.isAdmin}
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
        name="playerId"
        value={data.player.id}
      />
      <Button
        {form}
        label="Promouvoir en admin"
      />
    </InputsLayout>
    </Form>
</FormLayout>
{:else}
<p class="px-16 pt-8 text-center text-xs">
  Déjà <b>admin</b>
</p>
{/if}
