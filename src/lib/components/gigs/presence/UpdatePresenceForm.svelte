<script lang="ts">
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import type { Gig, Player } from '@prisma/client';
  import type { Validation } from 'sveltekit-superforms';
  import { superForm } from 'sveltekit-superforms/client';

  import Button from '../../forms/Button.svelte';
  import Checkbox from '../../forms/Checkbox.svelte';
  import Form from '../../forms/Form.svelte';
  import type { PresenceSchema } from './presenceSchema';

  export let gig: Gig;
  export let player: Player;
  export let action: string;

  export let data: Validation<PresenceSchema>;

  const { form, errors, enhance, tainted, submitting, message } = superForm(data, {
    taintedMessage: 'Veux tu vraiment quitter la page ? Tes modifications seront perdues.'
  });
  message.subscribe(sendToast);
</script>

<Form
  {action}
  errors={$errors._errors || []}
  {enhance}
>
  <div class="grid w-full grid-cols-1 gap-y-2">
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
      name="value"
      label="participe"
      bind:checked={$form['value']}
    />
    <Button
      label={'Mettre à jour'}
      disabled={$submitting || !$tainted}
    />
  </div>
</Form>
