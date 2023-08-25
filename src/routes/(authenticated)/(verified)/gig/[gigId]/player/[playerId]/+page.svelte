<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import { superForm } from 'sveltekit-superforms/client';
  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';
  import NavBar from '$lib/components/layout/NavBar.svelte';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<NavBar
  returnHref="/gig/{data['gig'].id}"
  label={data.gig.name}
/>

<p class="px-16 pt-8 text-center text-xs">
  <b>{data.player.name}</b>
</p>

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
  <p class="px-16 pt-8 text-center text-xs">Déjà <b> organisateurice </b></p>
{/if}
