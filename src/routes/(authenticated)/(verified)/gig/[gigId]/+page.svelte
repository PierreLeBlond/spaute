<script lang="ts">
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import GigPage from '$lib/components/gigs/gig/GigPage.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerView from '$lib/components/gigs/gig/PlayerView.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';

  export let data: PageData;

  const spamForm = superForm(data.spamForm);
  const form = superForm(data.form);

  $: remainingMemberships = data.band
    ? data.band.memberships.filter((membership) =>
        data.gig.presences.every((presence) => presence.player.id != membership.player.id)
      )
    : [];
  $: absentPresences = data.gig.presences.filter((presence) => !presence.value);
</script>

<div class="flex justify-between">
  <ReturnLink href="/gigs" />
  {#if data.currentMembership?.isAdmin || data.currentPresence?.isOrganizer}
    <EditLink href="/gig/{data.gig.id}/edit" />
  {/if}
</div>

<div class="h-full w-full overflow-y-auto">
  <GigPage
    player={data.currentPlayer}
    gig={data.gig}
    presence={data.currentPresence}
    createAction={'?/create'}
    updateAction={'?/update'}
    {form}
  />

  <div class="bg-neutral-200 p-2">
    <p class="text-sm">Présences et configuration</p>
    <ul class="p-2">
      {#if data.gig.currentFormation}
        {#each data.gig.currentFormation.formationVoices as formationVoice}
          <p class="text-sm">{formationVoice.instrument.name}</p>
          <div class="contents text-orange-600">
            {#each formationVoice.formationVoicePresences as formationVoicePresence}
              {@const membership =
                data.band?.memberships.find(
                  (membership) => membership.player.id == formationVoicePresence.presence.player.id
                ) || null}
              <PlayerView
                currentPresence={data.currentPresence}
                presence={formationVoicePresence.presence}
                currentMembership={data.currentMembership}
                {membership}
                gig={data.gig}
              />
            {/each}
          </div>
        {/each}
        <p class="text-sm">Autres</p>
        <div class="contents text-orange-600">
          {#each data.gig.currentFormation.formationUndefinedVoicePresences as formationUndefinedVoicePresence}
            {@const membership =
              data.band?.memberships.find(
                (membership) => membership.player.id == formationUndefinedVoicePresence.presence.player.id
              ) || null}
            <PlayerView
              currentPresence={data.currentPresence}
              presence={formationUndefinedVoicePresence.presence}
              currentMembership={data.currentMembership}
              {membership}
              gig={data.gig}
            />
          {/each}
        </div>
      {:else}
        <p class="text-sm">Pas de configuration possible :(</p>
      {/if}
    </ul>

    <p class="text-sm">Absences</p>

    <ul class="p-2">
      {#each absentPresences as presence}
        {@const membership =
          data.band?.memberships.find((membership) => membership.player.id == presence.player.id) || null}
        <div class="contents text-red-500">
          <PlayerView
            currentPresence={data.currentPresence}
            {presence}
            currentMembership={data.currentMembership}
            {membership}
            gig={data.gig}
          />
        </div>
      {/each}
    </ul>

    {#if remainingMemberships.length > 0}
      <p class="pb-2 text-sm">N'ont pas encore répondus</p>
      {#if data.currentMembership?.isAdmin || data.currentPresence?.isOrganizer}
        <Form
          form={spamForm}
          action="?/spam"
        >
          <input
            type="hidden"
            name="userId"
            value={data.currentPlayer.userId}
          />
          <input
            type="hidden"
            name="gigId"
            value={data.gig.id}
          />
          <input
            type="hidden"
            name="gigName"
            value={data.gig.name}
          />
          <Button
            form={spamForm}
            label={'Spaaaaaaaamer ces fanfarons !'}
          />
        </Form>
      {/if}
      <ul class="p-2">
        {#each remainingMemberships as membership}
          <PlayerItem player={membership.player} />
        {/each}
      </ul>
    {/if}
  </div>
</div>
