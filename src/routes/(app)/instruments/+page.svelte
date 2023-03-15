<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: instruments = data.instruments;
</script>

<ul
  class="p-2 w-full sm:w-96 grid grid-cols-1 gap-y-2 mb-2 overflow-y-auto border grow border-yellow-600 rounded"
>
  {#each instruments as instrument}
    <li class="w-full">
      <p
        class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
      >
        {instrument.name}
      </p>
    </li>
  {/each}
</ul>
<div class="bg-yellow-600 text-zinc-900 h-32 p-2 rounded w-full sm:w-96">
  <h2 class="w-full text-sm">Add an instrument</h2>
  <form class="pt-2 grid grid-cols-2 gap-y-2" method="POST">
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
