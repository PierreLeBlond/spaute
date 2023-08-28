<script lang="ts">
  import ListItem from '$lib/components/layout/ListItem.svelte';
  import type { Player } from '@prisma/client';

  export let player: Player;
  export let isOrganizer: boolean = false;
  export let isAdmin: boolean = false;

  export let type: 'default' | 'link' | 'self' = 'default';
</script>

<ListItem {type}>
  <div class="flex w-full justify-between text-sm">
    <p>
      {player.name}
    </p>
    {#if isAdmin}
      <p>admin</p>
    {:else if isOrganizer}
      <p>organisateurice</p>
    {/if}
  </div>
</ListItem>
