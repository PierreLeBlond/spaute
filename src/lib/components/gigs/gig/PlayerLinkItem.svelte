<script lang="ts">
  import type { OrganizerRole, Player } from '@prisma/client';

  export let player: Player & { organizerRoles: OrganizerRole[] };
  export let href: string;
</script>

<a
  class="flex w-full justify-between rounded p-2 text-sm"
  {href}
>
  <p>
    {player.name}
  </p>
  {#if player.organizerRoles.length != 0}
    <p>organisateurice</p>
  {/if}
</a>
