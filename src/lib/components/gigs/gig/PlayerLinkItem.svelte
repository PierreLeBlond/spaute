<script lang="ts">
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let isAdmin: boolean = false;
  export let href: string;
</script>

<ListItem type="link">
  <a
    class="flex w-full justify-between rounded text-sm"
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
</ListItem>
