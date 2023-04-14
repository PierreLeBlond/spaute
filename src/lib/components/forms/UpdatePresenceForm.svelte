<script lang="ts">
  import type { Presence } from '@prisma/client';
  import Button from './Button.svelte';
  import Checkbox from './Checkbox.svelte';
  import Form from './Form.svelte';
  import { enhance } from '$app/forms';

  export let presence: Presence;
  export let action: string;
</script>

<Form
  {action}
  errors={[]}
  {enhance}
>
  <div class="grid w-full grid-cols-1 gap-y-2">
    <input
      type="hidden"
      value={presence.id}
      name="presenceId"
    />
    <Checkbox
      id="presence"
      label="participe"
      checked={presence.value}
    />
    <Button label={'Mettre à jour'} />
  </div>
</Form>
