<script lang="ts">
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let isAdmin: boolean = false;
  export let highlighted: boolean = false;
</script>

<div
  class="flex w-full justify-between rounded border-orange-300 p-2 text-sm"
  class:border-b-2={highlighted}
>
  <p>
    {player.name}
  </p>
  {#if isAdmin}
    <p>admin</p>
  {:else if isOrganizer}
    <p>organisateurice</p>
  {/if}
</div>
