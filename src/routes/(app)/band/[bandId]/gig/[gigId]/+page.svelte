<script lang="ts">
  import JoinGigForm from "$lib/components/forms/JoinGigForm.svelte";
  import UpdatePresenceForm from "$lib/components/forms/UpdatePresenceForm.svelte";
  import GigView from "$lib/components/GigView.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: gig = data.gig;
  $: presence = data.presence;
  $: availablePlayers = data.availablePlayers;
  $: unavailablePlayers = data.unavailablePlayers;
  $: remainingPlayers = data.remainingPlayers;
</script>

<div class="p-2 w-full sm:w-96 grid grid-cols-1 gap-y-1">
  <GigView {gig} band={gig.band} />
</div>

{#if gig.playable}
  <h1 class="px-2 pb-2 w-full sm:w-96 text-green-600">Playable !!</h1>
{:else}
  <h1 class="px-2 pb-2 w-full sm:w-96 text-red-600">Not playable... :(</h1>
{/if}

<div class="w-full sm:w-96">
  {#if !presence}
    <JoinGigForm action={"?/join"} />
  {:else}
    <UpdatePresenceForm {presence} action={"?/update"} />
  {/if}
</div>

<ul
  class="mt-2 p-2 w-full sm:w-96 border grow border-yellow-600 rounded grid grid-cols-1 gap-y-2 overflow-y-auto"
>
  {#each availablePlayers as availablePlayer}
    <li class="w-full px-4 grid grid-cols-1 border border-green-600 rounded">
      <div>
        {availablePlayer.name}
      </div>
    </li>
  {/each}

  {#each unavailablePlayers as unavailablePlayer}
    <li class="w-full px-4 grid grid-cols-1 border border-red-600 rounded">
      <div>
        {unavailablePlayer.name}
      </div>
    </li>
  {/each}

  {#each remainingPlayers as remainingPlayer}
    <li class="w-full px-4 grid grid-cols-1 border border-slate-600 rounded">
      <div>
        {remainingPlayer.name}
      </div>
    </li>
  {/each}
</ul>
