<script lang="ts">
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let href: string;
</script>

<a
  class="flex w-full justify-between rounded p-2 text-sm"
  {href}
>
  <p>
    {player.name}
  </p>
  {#if isOrganizer}
    <p>organisateurice</p>
  {/if}
</a>
