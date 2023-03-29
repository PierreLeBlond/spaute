<script lang="ts">
  import type { OrganizerRole, Player } from '@prisma/client';

  export let player: Player & { organizerRoles: OrganizerRole[] };
</script>

<div class="flex w-full justify-between rounded p-2 text-sm">
  <p>
    {player.name}
  </p>
  {#if player.organizerRoles.length != 0}
    <p>organisateurice</p>
  {/if}
</div>
