<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerLinkItem from '$lib/components/gigs/gig/PlayerLinkItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const { errors, enhance, message } = superForm(data.form);
  message.subscribe(sendToast);
</script>

<div class="flex justify-between">
  <ReturnLink href="/bands" />
  {#if data.currentMembership?.isAdmin}
    <EditLink href="/band/{data.band.id}/edit" />
  {/if}
</div>

{#if !data.currentMembership}
  <div class="w-full p-2">
    <Form
      errors={$errors._errors || []}
      {enhance}
    >
      <p class="text-xs">Allez viens, on est bien !</p>
      <input
        type="hidden"
        name="bandId"
        value={data.band.id}
      />
      <input
        type="hidden"
        name="playerId"
        value={data.currentPlayer.id}
      />
      <Button label={'Rejoindre'} />
    </Form>
  </div>
{/if}

<List>
  {#if data.band.memberships.length == 0}
    <p class="text-xs">Youhou ? Y'a quelqu'un ?</p>
  {:else}
    {#each data.band.memberships as membership}
      <ListItem>
        {#if data.currentMembership?.player.id == membership.player.id}
          <PlayerItem
            player={membership.player}
            isAdmin={membership.isAdmin}
            highlighted={true}
          />
        {:else if data.currentMembership?.isAdmin}
          <PlayerLinkItem
            player={membership.player}
            href="/band/{data.band.id}/player/{membership.player.id}"
            isAdmin={membership.isAdmin}
          />
        {:else}
          <PlayerItem
            player={membership.player}
            isAdmin={membership.isAdmin}
          />
        {/if}
      </ListItem>
    {/each}
  {/if}
</List>
