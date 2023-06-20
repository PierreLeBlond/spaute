<script lang="ts">
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let isAdmin: boolean = false;
  export let href: string;
</script>

<a
  class="mb-2 flex w-full justify-between rounded bg-neutral-100 p-2 text-sm shadow shadow-blue-300"
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
