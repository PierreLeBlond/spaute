<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerLinkItem from '$lib/components/gigs/gig/PlayerLinkItem.svelte';
  import PlayerSelfItem from '$lib/components/gigs/gig/PlayerSelfItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import InputsLayout from '$lib/components/layout/InputsLayout.svelte';

  export let data: PageData;

  const form = superForm(data.form);
</script>

<div class="flex justify-between">
  <ReturnLink href="/bands" />
  {#if data.currentMembership?.isAdmin}
    <EditLink href="/band/{data.band.id}/edit" />
  {/if}
</div>

{#if !data.currentMembership}
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
          value={data.currentPlayer.id}
        />
        <Button
          {form}
          label="Rejoindre"
        />
      </InputsLayout>
    </Form>
  </FormLayout>
{/if}

<List>
  {#if data.band.memberships.length == 0}
    <p class="text-xs">Youhou ? Y'a quelqu'un ?</p>
  {:else}
    {#each data.band.memberships as membership}
      <div
        class="contents"
        class:!shadow-orange-300={data.currentMembership?.player.id == membership.player.id}
      />
      {#if data.currentMembership?.player.id == membership.player.id}
        <PlayerSelfItem
          player={membership.player}
          isAdmin={membership.isAdmin}
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
    {/each}
  {/if}
</List>
