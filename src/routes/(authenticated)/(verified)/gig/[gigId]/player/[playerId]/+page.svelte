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

<Title>
  <b>{data.player.name}</b>
</Title>

{#if !data.presence?.isOrganizer}
  <FormLayout>
    <InputsLayout>
      <Form {form}>
        <input
          type="hidden"
          name="gigId"
          value={data.gig.id}
        />
        <input
          type="hidden"
          name="playerId"
          value={data.player.id}
        />
        <Button
          {form}
          label="Promouvoir en organisateurice"
        />
      </Form>
    </InputsLayout>
  </FormLayout>
{:else}
  <Info>Déjà <b> organisateurice </b></Info>
{/if}
