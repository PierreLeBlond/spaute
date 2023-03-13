<script lang="ts">
  import type { PageData } from "./$types";
  import Role from "./Role.svelte";

  export let data: PageData;

  $: roles = data.roles;
  $: instruments = data.instruments;

  let disabled = false;
</script>

<ul class="grid grid-cols-1 gap-y-2 pb-2">
  {#each roles as role}
    <li class="w-64">
      <Role {role} instrument={role.instrument} />
    </li>
  {/each}
</ul>
<div
  class="w-64 p-2 border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
>
  <p class="text-center">Add a role</p>
  <form class="grid grid-cols-2 gap-y-2" method="POST">
    <label for="instrument-input"> instrument </label>
    <select name="instrumentId" id="instrument-input" class="bg-zinc-600">
      {#each instruments as instrument}
        <option value={instrument.id}>
          {instrument.name}
        </option>
      {/each}
    </select>
    <label for="playable-input"> playable </label>
    <input type="checkbox" name="playable" id="playable-input" />
    <button
      class="col-span-2 w-full p-2 border rounded border-yellow-600"
      {disabled}>Add</button
    >
  </form>
</div>
