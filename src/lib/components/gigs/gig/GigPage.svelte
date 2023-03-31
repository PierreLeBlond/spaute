<script lang="ts">
  import type { Band, Gig, Presence } from '@prisma/client';
  import JoinGigForm from '$lib/components/forms/JoinGigForm.svelte';
  import UpdatePresenceForm from '$lib/components/forms/UpdatePresenceForm.svelte';
  import GigView from './GigView.svelte';

  export let gig: Gig & { band: Band };
  export let presence: Presence | null;

  export let joinAction: string;
  export let updateAction: string;
</script>

<div class="flex w-full p-2">
  <GigView
    {gig}
    band={gig.band}
    {presence}
  />
</div>

<div class="flex w-full flex-col p-2">
  {#if !presence}
    <JoinGigForm action={joinAction} />
  {:else}
    <UpdatePresenceForm
      {presence}
      action={updateAction}
    />
  {/if}
  <p class="text-sm">
    {gig.description || ''}
  </p>
</div>
