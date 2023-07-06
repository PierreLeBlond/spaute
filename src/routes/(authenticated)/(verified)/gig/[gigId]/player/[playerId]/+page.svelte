<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<ReturnLink href="/gig/{data['gig'].id}" />

<p class="w-full p-2 pl-4 text-sm">{data.player.name}</p>

{#if !data.presence?.isOrganizer}
  <div class="flex w-full p-2">
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
  </div>
{:else}
  <div class="flex w-full p-2 pl-4 text-xs">Déjà organisateurice</div>
{/if}
