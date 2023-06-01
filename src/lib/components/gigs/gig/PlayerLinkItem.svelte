<script lang="ts">
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let isAdmin: boolean = false;
  export let href: string;
</script>

<a
  class="flex w-full justify-between rounded border-b-2 border-blue-300 p-2 text-sm"
  {href}
>
  <p>
    {player.name}
  </p>
  {#if isAdmin}
    <p>admin</p>
  {:else if isOrganizer}
    <p>organisateurice</p>
  {/if}
</a>
