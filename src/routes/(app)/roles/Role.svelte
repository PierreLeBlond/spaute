<script lang="ts">
  import type { Instrument, Role } from "@prisma/client";

  export let role: Role;
  export let instrument: Instrument;
</script>

<div
  class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
>
  <div>
    <p class="text-center">
      {instrument.name}
    </p>
  </div>
  <form
    class="grid p-2 bg-yellow-600 text-zinc-900 rounded grid-cols-2 gap-y-2"
    method="POST"
    action="?/update"
  >
    <input type="hidden" value={role.id} name="roleId" />
    <label for="playable-input">Playable</label>
    <input
      id="playable-input"
      name="playable"
      type="checkbox"
      checked={role.playable}
      class="border rounded border-yellow-600"
    />
    <button class="col-span-4 border rounded border-zinc-900">Update</button>
  </form>
</div>
