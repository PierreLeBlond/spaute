<script lang="ts">
  import type { Instrument, Role } from "@prisma/client";
  import { onMount } from "svelte";

  export let role: Role;
  export let instrument: Instrument;

  const updateRole = async (playable: boolean) => {
    await fetch(`./role/${role.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        data: { playable },
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  let disabled = true;
  const onRoleChange = async (playable: boolean) => {
    if (disabled) {
      return;
    }

    disabled = true;
    await updateRole(playable);
    disabled = false;
  };

  $: onRoleChange(role.playable);

  onMount(() => {
    disabled = false;
  });
</script>

<div
  class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
>
  <div>
    <p class="text-center">
      {instrument.name}
    </p>
  </div>
  <div class="grid grid-cols-2 gap-x-2">
    <label for="playable-input"> Playable</label>
    <input
      id="playable-input"
      type="checkbox"
      bind:checked={role.playable}
      class="border rounded border-yellow-600"
      {disabled}
    />
  </div>
</div>
