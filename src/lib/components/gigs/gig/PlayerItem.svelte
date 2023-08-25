<script lang="ts">
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let isAdmin: boolean = false;
</script>

<div class="mb-2 flex w-full justify-between rounded bg-neutral-200 p-2 text-sm shadow shadow-neutral-300">
  <p>
    {player.name}
  </p>
  {#if isAdmin}
    <p>admin</p>
  {:else if isOrganizer}
    <p>organisateurice</p>
  {/if}
</div>
