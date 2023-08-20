<script lang="ts">
  import type { Gig, Player } from '@prisma/client';
  import type { ZodValidation } from 'sveltekit-superforms';
  import type { SuperForm } from 'sveltekit-superforms/client';

  import Button from '../../forms/Button.svelte';
  import Form from '../../forms/Form.svelte';
  import type { PresenceSchema } from './presenceSchema';

  export let gig: Gig;
  export let player: Player;
  export let action: string;

  export let form: SuperForm<ZodValidation<PresenceSchema>, string>;
</script>

<div class="grid grid-cols-2 gap-x-2 text-sm">
  <Form
    {form}
    {action}
  >
    <input
      type="hidden"
      name="gigId"
      value={gig.id}
    />
    <input
      type="hidden"
      name="playerId"
      value={player.id}
    />
    <input
      type="hidden"
      name="value"
      value
    />
    <Button
      {form}
      label="Participe"
    />
  </Form>
  <Form
    {form}
    {action}
  >
    <input
      type="hidden"
      name="gigId"
      value={gig.id}
    />
    <input
      type="hidden"
      name="playerId"
      value={player.id}
    />
    <input
      type="hidden"
      name="value"
      value={false}
    />
    <Button
      {form}
      label="Ne participe pas"
    />
  </Form>
</div>
