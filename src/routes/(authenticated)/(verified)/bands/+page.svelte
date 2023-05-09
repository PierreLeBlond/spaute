<script lang="ts">
  import DeleteButtonIcon from '$lib/components/forms/DeleteButtonIcon.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { enhance, message } = superForm(data.form);
  message.subscribe(sendToast);
</script>

<div class="p-2">
  <RightLink
    href="/band"
    label="Créer une fanfare"
  />
</div>
<List>
  {#if data.memberships.length == 0}
    <p class="text-xs">T'as pas de fanfare ? la tristesse...</p>
  {:else}
    {#each data.memberships as membership}
      <ListLinkItem>
        <div class="flex w-full items-center justify-between">
          <a
            href="./band/{membership.band.id}/players"
            class="grow rounded p-2 text-sm">{membership.band.name}</a
          >
          <form
            method="POST"
            action="?/delete"
            use:enhance
          >
            <input
              type="hidden"
              name="bandId"
              value={membership.band.id}
            />
            <DeleteButtonIcon />
          </form>
        </div>
      </ListLinkItem>
    {/each}
  {/if}
</List>
