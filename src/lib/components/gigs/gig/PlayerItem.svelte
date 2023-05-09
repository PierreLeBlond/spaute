<script lang="ts">
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
</script>

<div class="flex w-full justify-between rounded p-2 text-sm">
  <p>
    {player.name}
  </p>
  {#if isOrganizer}
    <p>organisateurice</p>
  {/if}
</div>
