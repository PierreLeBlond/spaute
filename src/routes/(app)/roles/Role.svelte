<script lang="ts">
  import Button from "$lib/components/forms/Button.svelte";
  import Checkbox from "$lib/components/forms/Checkbox.svelte";
  import Form from "$lib/components/forms/Form.svelte";
import type { Instrument, Role } from "@prisma/client";

  export let role: Role;
  export let instrument: Instrument;
</script>

  <Form action={'?/update'}>
  <div
    class="grid grid-cols-1 gap-y-2"
  >
    <p class="text-center text-xs">
      {instrument.name}
    </p>
    <input type="hidden" value={role.id} name="roleId" />
    <Checkbox
      id="playable"
      label="je gère mon pupitre"
      checked={role.playable}
    />
    <Button label={"Mettre à jour"}/>
</div>
  </Form>