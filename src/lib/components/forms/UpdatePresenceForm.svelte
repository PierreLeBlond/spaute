<script lang="ts">
  import type { Presence } from "@prisma/client";
  import Button from "./Button.svelte";
  import Checkbox from "./Checkbox.svelte";
  import Form from "./Form.svelte";

  export let presence: Presence;
  export let action: string;
</script>

<Form {action}>
  <div
  class="w-full grid grid-cols-1 gap-y-2"
>
  <input type="hidden" value={presence.id} name="presenceId" />
  <Checkbox id="presence" label="participe" checked={presence.value}></Checkbox>
    <Button label={"Mettre à jour"}/>
  </div>
</Form>
