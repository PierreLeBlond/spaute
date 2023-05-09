<script lang="ts">
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import type { Gig, Player } from '@prisma/client';
  import { superForm } from 'sveltekit-superforms/client';
  import type { Validation } from 'sveltekit-superforms/index';

  import Button from '../../forms/Button.svelte';
  import Form from '../../forms/Form.svelte';
  import type { PresenceSchema } from './presenceSchema';

  export let gig: Gig;
  export let player: Player;
  export let action: string;

  export let data: Validation<PresenceSchema>;

  const { enhance, submitting, message } = superForm(data);
  message.subscribe(sendToast);
</script>

<div class="grid grid-cols-2 gap-x-2 text-sm">
  <Form
    {action}
    errors={[]}
    {enhance}
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
      value={true}
    />
    <Button
      disabled={$submitting}
      label={'Participe'}
    />
  </Form>
  <Form
    {action}
    errors={[]}
    {enhance}
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
      disabled={$submitting}
      label={'Ne participe pas'}
    />
  </Form>
</div>
