<script lang="ts">
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;
  $: instruments = data.instruments;

  const { enhance, message } = superForm(data.form);
  message.subscribe(sendToast);
</script>

<div class="p-2">
  <RightLink
    href="/admin/instrument"
    label="Ajouter un instrument"
  />
</div>

<List>
  {#each instruments as instrument}
    <ListItem>
      <div class="flex w-full items-center justify-between">
        <p class="w-full rounded p-2 text-sm">{instrument.name}</p>
        <form
          method="POST"
          action="?/delete"
          use:enhance
        >
          <input
            type="hidden"
            name="id"
            value={instrument.id}
          />
          <DeleteButtonIcon />
        </form>
      </div>
    </ListItem>
  {/each}
</List>
