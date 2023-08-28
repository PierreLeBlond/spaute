<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/forms/FormLayout.svelte';
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import Info from '$lib/components/layout/Info.svelte';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<Title>{data.player.name}</Title>

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
  <Info>
    Déjà <b>admin</b>
  </Info>
{/if}
