<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerLinkItem from '$lib/components/gigs/gig/PlayerLinkItem.svelte';
  import List from '$lib/components/layout/List.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/forms/FormLayout.svelte';
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';
  import Rest from '$lib/components/logos/Rest.svelte';
  import Info from '$lib/components/layout/Info.svelte';
  import Delimiter from '$lib/components/layout/Delimiter.svelte';
  import Title from '$lib/components/layout/Title.svelte';

  export let data: PageData;

  const form = superForm(data.form);
</script>

{#if !data.currentMembership}
  <Info>Rejoindre la fanfare <b>{data.band.name}</b> ?</Info>
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
  <Delimiter></Delimiter>
{/if}

<Title>Fanfaronxs</Title>

<List>
  {#if data.band.memberships.length == 0}
    <Rest></Rest>
  {:else}
    {#each data.band.memberships as membership}
      {#if data.currentMembership?.player.id == membership.player.id}
        <PlayerItem
          player={membership.player}
          isAdmin={membership.isAdmin}
          type="self"
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
