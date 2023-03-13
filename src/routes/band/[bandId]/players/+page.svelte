<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: players = data.players;
</script>

<ul class="grid grid-cols-1 gap-y-2">
  {#each players as player}
    <li class="w-64">
      <a
        class="w-full block border border-yellow-200 rounded text-center"
        href="./player/{player.id}/presences"
      >
        {player.name}</a
      >
    </li>
  {/each}
</ul>
