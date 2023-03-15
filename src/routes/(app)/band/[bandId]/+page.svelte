<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

{#if data.players.length != 0}
  <div
    class="w-full mb-2 p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-1"
  >
    <p class="text-sm">
      You're a member of {data.band.name} !
    </p>
  </div>
{:else}
  <form
    class="w-full mb-2 p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-1"
    method="POST"
    action="?/join"
  >
    <p class="text-sm">
      You're not a member of {data.band.name}. Join us ?
    </p>
    <button class="border rounded border-zinc-900">Join</button>
  </form>
{/if}

<ul
  class="p-2 w-full sm:w-96 grid grid-cols-1 gap-y-2 mb-2 overflow-y-auto border grow border-yellow-600 rounded"
>
  {#each data.band.players as player}
    <li
      class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
    >
      {player.name}
    </li>
  {/each}
</ul>
