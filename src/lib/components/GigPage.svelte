<script lang="ts">
  import { page } from '$app/stores';
  import type { Band, Gig, Player, Presence } from '@prisma/client';
  import DeleteButton from './buttons/DeleteButton.svelte';
  import JoinGigForm from './forms/JoinGigForm.svelte';
  import UpdatePresenceForm from './forms/UpdatePresenceForm.svelte';
  import GigView from './GigView.svelte';
  import List from './layout/List.svelte';

  export let gig: Gig & { band: Band };
  export let presence: Presence | null;
  export let availablePlayers: Player[];
  export let unavailablePlayers: Player[];
  export let remainingPlayers: Player[];

  export let joinAction: string;
  export let updateAction: string;
</script>

<div class="flex w-full p-2 sm:w-96">
  <GigView
    {gig}
    band={gig.band}
    {presence}
  />
</div>

<div class="flex w-full p-2 sm:w-96">
  {#if !presence}
    <JoinGigForm action={joinAction} />
  {:else}
    <UpdatePresenceForm
      {presence}
      action={updateAction}
    />
  {/if}
</div>

<List>
  {#each availablePlayers as availablePlayer}
    <li class="mb-2 w-full rounded border border-green-600 bg-neutral-900 p-2 text-sm">
      {availablePlayer.name}
    </li>
  {/each}

  {#each unavailablePlayers as unavailablePlayer}
    <li class="mb-2 w-full rounded border border-red-600 bg-neutral-900 p-2 text-sm">
      <div>
        {unavailablePlayer.name}
      </div>
    </li>
  {/each}

  {#each remainingPlayers as remainingPlayer}
    <li class="mb-2 w-full rounded border border-neutral-600 bg-neutral-900 p-2 text-sm">
      <div>
        {remainingPlayer.name}
      </div>
    </li>
  {/each}
</List>

{#if $page.data['isAdmin']}
  <div class="w-full p-2">
    <DeleteButton
      label="Supprimer la presta"
      url="/api/gig/{gig.id}"
      backUrl="../"
    />
  </div>
{/if}
