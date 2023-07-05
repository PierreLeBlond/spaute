<script lang="ts">
  import CreatePresenceForm from '$lib/components/gigs/presence/CreatePresenceForm.svelte';
  import UpdatePresenceForm from '$lib/components/gigs/presence/UpdatePresenceForm.svelte';
  import type { Band, Gig, Player, Presence } from '@prisma/client';
  import type { ZodValidation } from 'sveltekit-superforms';
  import type { SuperForm } from 'sveltekit-superforms/client';

  import type { PresenceSchema } from '../presence/presenceSchema';
  import GigView from './GigView.svelte';

  export let player: Player;
  export let gig: Gig & { band: Band | null };
  export let presence: Presence | null;

  export let createAction: string;
  export let updateAction: string;

  export let form: SuperForm<ZodValidation<PresenceSchema>, string>;
</script>

<div class="flex w-full p-2">
  <GigView
    {gig}
    band={gig.band}
    {presence}
  />
</div>

<div class="flex w-full flex-col bg-neutral-200 p-2">
  {#if !presence}
    <CreatePresenceForm
      action={createAction}
      {gig}
      {player}
      {form}
    />
  {:else}
    <UpdatePresenceForm
      {gig}
      {player}
      action={updateAction}
      {form}
    />
  {/if}
</div>

<div class="p-2 text-sm">
  <p>Description</p>
  <p class="p-2">
    {gig.description || '...'}
  </p>
</div>
