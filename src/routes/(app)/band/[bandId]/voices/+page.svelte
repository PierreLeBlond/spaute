<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: voices = data.voices;
  $: instruments = data.instruments;
</script>

<ul
  class="p-2 w-full sm:w-96 grid grid-cols-1 gap-y-2 mb-2 overflow-y-auto border grow border-yellow-600 rounded"
>
  {#each voices as voice}
    <li
      class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
    >
      {voice.instrument.name}
    </li>
  {/each}
</ul>
<div
  class="p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-1 gap-y-1 w-full sm:w-96"
>
  <h2 class="w-full text-sm">Add a voice</h2>
  <form class="grid grid-cols-2 gap-y-2" method="POST">
    <label for="instrument-input"> instrument </label>
    <select
      name="instrumentId"
      id="instrument-input"
      class="bg-zinc-900 text-yellow-600 rounded"
    >
      {#each instruments as instrument}
        <option value={instrument.id}>
          {instrument.name}
        </option>
      {/each}
    </select>
    <button class="col-span-2 border rounded border-zinc-900">Add</button>
  </form>
</div>
