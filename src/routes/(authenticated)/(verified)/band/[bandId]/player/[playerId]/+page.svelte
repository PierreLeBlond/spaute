<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { errors, enhance, message } = superForm(data.form);
  message.subscribe(sendToast);
</script>

<ReturnLink href="/band/{data['band'].id}/players" />

<p class="w-full p-2 pl-4 text-sm">{data.player.name}</p>

{#if !data.membership?.isAdmin}
  <div class="flex w-full p-2">
    <Form
      errors={$errors._errors || []}
      {enhance}
    >
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
      <Button label={'Promouvoir en admin'} />
    </Form>
  </div>
{:else}
  <div class="flex w-full p-2 pl-4 text-xs">Déjà admin</div>
{/if}
