<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: players = data.players;
</script>

<ul class="grid grid-cols-1 gap-y-2 pb-2">
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
<div
  class="w-64 p-2 border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
>
  <p class="text-center">Add a player</p>
  <form class="grid grid-cols-2 gap-y-2" method="POST">
    <label for="name-input"> name </label>
    <input type="text" class="bg-zinc-600" name="name" id="name-input" />
    <button class="col-span-2 w-full p-2 border rounded border-yellow-600"
      >Add</button
    >
  </form>
</div>
