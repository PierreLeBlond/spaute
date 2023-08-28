<script lang="ts">
  import type { Gig, Player } from '@prisma/client';
  import type { ZodValidation } from 'sveltekit-superforms';
  import type { SuperForm } from 'sveltekit-superforms/client';

  import Button from '../../forms/Button.svelte';
  import Checkbox from '../../forms/Checkbox.svelte';
  import Form from '../../forms/Form.svelte';
  import type { PresenceSchema } from './presenceSchema';
  import InputsLayout from '$lib/components/forms/InputsLayout.svelte';

  export let gig: Gig;
  export let player: Player;
  export let action: string;

  export let form: SuperForm<ZodValidation<PresenceSchema>, string>;
</script>

<Form
  {form}
  {action}
>
  <InputsLayout>
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
    <Checkbox
      {form}
      field="value"
      checkedLabel="je participe"
      uncheckedLabel="je ne participe pas"
    />
    <Button
      {form}
      label="Mettre à jour"
    />
  </InputsLayout>
</Form>
