<script lang="ts">
  import type { PageData } from "./$types";
  import Role from "./Role.svelte";

  export let data: PageData;

  $: roles = data.roles;
  $: instruments = data.instruments;
</script>

<ul
  class="mb-2 p-2 border grow border-yellow-600 rounded w-full sm:w-96 grid grid-cols-1 gap-y-2 pb-2 overflow-y-auto"
>
  {#each roles as role}
    <li class="w-full">
      <Role {role} instrument={role.instrument} />
    </li>
  {/each}
</ul>
<div
  class="p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-1 gap-y-1 w-full sm:w-96"
>
  <h2 class="w-full text-sm">Add a role</h2>
  <form class="grid grid-cols-2 gap-y-2" method="POST" action="?/add">
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
    <label for="playable-input"> playable </label>
    <input type="checkbox" name="playable" id="playable-input" />
    <button class="col-span-2 border rounded border-zinc-900">Add</button>
  </form>
</div>
