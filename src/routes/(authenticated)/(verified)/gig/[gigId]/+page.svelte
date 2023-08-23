<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/forms/Button.svelte';
  import Form from '$lib/components/forms/Form.svelte';
  import PlayerItem from '$lib/components/gigs/gig/PlayerItem.svelte';
  import PlayerView from '$lib/components/gigs/gig/PlayerView.svelte';
  import UpdatePresenceForm from '$lib/components/gigs/presence/UpdatePresenceForm.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import { DateTime } from 'luxon';
  import { superForm } from 'sveltekit-superforms/client';

  import type { PageData } from './$types';
  import FormLayout from '$lib/components/layout/FormLayout.svelte';
  import Delimiter from '$lib/components/layout/Delimiter.svelte';
  import List from '$lib/components/layout/List.svelte';

  export let data: PageData;

  const spamForm = superForm(data.spamForm);
  const form = superForm(data.form);
  const joinForm = superForm(data.joinForm);

  $: remainingMemberships = data.band
    ? data.band.memberships.filter((membership) =>
        data.gig.presences.every((presence) => presence.player.id != membership.player.id)
      )
    : [];
  $: absentPresences = data.gig.presences.filter((presence) => !presence.value);

  $: link = `${$page.url.origin}/gig/${data.gig.id}`;
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      sendToast('Lien copié !');
    });
  };
</script>

<div class="flex justify-between">
  <ReturnLink href="/gigs" />
  {#if data.currentMembership?.isAdmin || data.currentPresence?.isOrganizer}
    <EditLink href="/gig/{data.gig.id}/edit" />
  {/if}
</div>

<div class="h-full w-full overflow-y-auto">
  <div class="flex justify-center p-8">
    <div class="grid grid-cols-6 items-center justify-center text-sm">
      <p class="col-span-6 text-center">
        {data.gig.name}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-people-fill col-span-1 justify-self-center"
        viewBox="0 0 16 16"
      >
        <path
          d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        />
      </svg>
      <div class="col-span-5">
        {#if data.gig.band}
          <a
            class="col-span-5 text-sm text-cyan-600"
            href="/band/{data.gig.band.id}">{data.gig.band.name}</a
          >
        {:else}
          Presta indépendante !
        {/if}
      </div>
      <div class="col-span-6">
        {#if data.gig.band && !data.currentMembership}
          <div class="w-full p-2">
            <Form
              {form}
              action="?/join"
              hideErrors
            >
              <input
                type="hidden"
                name="bandId"
                value={data.gig.band.id}
              />
              <input
                type="hidden"
                name="playerId"
                value={data.currentPlayer.id}
              />
              <Button
                form={joinForm}
                label={`Rejoindre ${data.gig.band.name}`}
              />
            </Form>
          </div>
        {/if}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-geo-alt-fill col-span-1 justify-self-center"
        viewBox="0 0 16 16"
      >
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
      <p class="col-span-5">
        {data.gig.location}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-calendar-fill col-span-1 justify-self-center"
        viewBox="0 0 16 16"
      >
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"
        />
      </svg>
      <p class="col-span-5">
        {DateTime.fromJSDate(data.gig.date)
          .setLocale('fr')
          .toLocaleString({ ...DateTime.DATETIME_MED })}
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-link-45deg col-span-1 justify-self-center"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
        />
        <path
          d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
        />
      </svg>
      <div
        class="col-span-5 cursor-pointer text-sm text-cyan-600"
        role="button"
        tabindex="0"
        on:click={copyLinkToClipboard}
        on:keydown={copyLinkToClipboard}
      >
        copier le lien de la presta
      </div>
      {#if data.gig.playable}
        <p class="col-span-5 col-start-2">C'est jouable !</p>
      {:else}
        <p class="col-span-5 col-start-2 text-red-500">C'est pas encore jouable...</p>
      {/if}
    </div>
  </div>

  {#if data.gig.description}
    <p class="p-4 text-center text-xs">
      {data.gig.description}
    </p>
  {/if}

  <Delimiter></Delimiter>

  <FormLayout>
    {#if !data.currentPresence}
      <UpdatePresenceForm
        action="?/create"
        gig={data.gig}
        player={data.currentPlayer}
        {form}
      />
    {:else}
      <UpdatePresenceForm
        gig={data.gig}
        player={data.currentPlayer}
        action="?/update"
        {form}
      />
    {/if}
  </FormLayout>

  <Delimiter></Delimiter>

  {#if data.gig.currentFormation && (data.gig.currentFormation.formationVoices.length > 0 || data.gig.currentFormation.formationUndefinedVoicePresences.length > 0)}

  <p class="text-center px-16 py-8 text-sm font-bold">Présences et configurations</p>
  <ul>
      {#each data.gig.currentFormation.formationVoices as formationVoice}
          <p class="text-center px-16 py-2 text-sm">{formationVoice.instrument.name}</p>
          <div class="contents text-orange-600">
            <List>
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
            </List>
          </div>
      {/each}
      {#if data.gig.currentFormation.formationUndefinedVoicePresences.length > 0}
        <p class="text-center px-16 py-2 text-sm">Sans instruments attribués</p>
        <div class="contents text-orange-600">
          <List>
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
          </List>
        </div>
      {/if}
  </ul>
    {:else}
      <p class="text-sm px-16 py-8 text-center font-bold">Pas de configuration possible :(</p>
  {/if}

  {#if absentPresences.length > 0}
    <Delimiter></Delimiter>
    <p class="text-center px-16 py-8 text-sm font-bold">Absences</p>
    <List>
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
    </List>
  {/if}

  {#if remainingMemberships.length > 0}
    <Delimiter></Delimiter>
    <p class="px-16 py-8 text-center text-sm font-bold">N'ont pas encore répondus</p>
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
    <List>
      {#each remainingMemberships as membership}
        <PlayerItem player={membership.player} />
      {/each}
    </List>
  {/if}
</div>
