<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h2 class="w-full sm:w-96 h-16 text-sm pb-2">
  First, we need to know who you are :
</h2>

<ul
  class="mb-2 p-2 grid grid-cols-1 gap-y-2 w-full sm:w-96 border grow border-yellow-600 rounded overflow-y-auto"
>
  {#each data.players as player}
    <li class="w-full">
      <form method="POST" action="?/login">
        <input type="hidden" name="playerId" value={player.id} />
        <button class="text-center w-full border border-yellow-300 rounded">
          {player.name}
        </button>
      </form>
    </li>
  {/each}
</ul>

<div class="bg-yellow-600 text-zinc-900 h-32 p-2 rounded w-full sm:w-96">
  <h2 class="w-full text-sm">
    <p>Couldn't find yourself ?</p>
    <p>Create a new player :</p>
  </h2>
  <form
    class="pt-2 grid grid-cols-2 gap-y-2"
    method="POST"
    action="?/addPlayer"
  >
    <label for="name-input">name -></label>
    <input
      id="name-input"
      name="name"
      class="bg-zinc-900 text-yellow-600 rounded"
      type="text"
    />
    <button class="col-span-2 border rounded border-zinc-900">Add</button>
  </form>
</div>
