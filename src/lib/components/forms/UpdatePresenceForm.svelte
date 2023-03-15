<script lang="ts">
  import type { Presence } from "@prisma/client";

  export let presence: Presence;
  export let action: string;
</script>

<form
  class="w-full p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-4"
  method="POST"
  {action}
>
  <input type="hidden" value={presence.id} name="presenceId" />
  <input
    type="radio"
    id="yes-input"
    bind:group={presence.value}
    name="presence"
    class="border rounded border-green-600"
    value={true}
  />
  <label for="yes-input" class="text-green-600"> Present </label>
  <input
    type="radio"
    id="no-input"
    bind:group={presence.value}
    name="presence"
    class="border rounded border-red-600 text-red-600"
    value={false}
  />
  <label for="no-input" class="text-red-600"> Absent </label>
  <button class="col-span-4 border rounded border-zinc-900">Update</button>
</form>
