<script lang="ts">
  import { page } from '$app/stores';
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import type { Band, Gig, Presence } from '@prisma/client';
  import { DateTime } from 'luxon';

  export let gig: Gig;
  export let band: Band | null;
  export let presence: Presence | null;
  export let showLink = true;

  $: link = `${$page.url.origin}/gig/${gig.id}`;
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      sendToast('Lien copié !');
    });
  };
</script>

<div class="grid grid-cols-6 items-center justify-center text-sm">
  <p class="col-span-6 text-center">
    {gig.name}
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
  <p class="col-span-5">
    {#if band}
      <a
        class="col-span-5 text-sm text-cyan-600"
        href="/band/{band.id}">{band.name}</a
      >
    {:else}
      Presta indépendante !
    {/if}
  </p>
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
    {gig.location}
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
    {DateTime.fromJSDate(gig.date)
      .setLocale('fr')
      .toLocaleString({ ...DateTime.DATETIME_MED })}
  </p>
  {#if showLink}
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
      on:click={copyLinkToClipboard}
      on:keydown={copyLinkToClipboard}
    >
      copier le lien de la presta
    </div>
  {/if}
  {#if !presence}
    <p class="col-span-5 col-start-2">Je ne sais pas si j'y participe.</p>
  {:else if presence.value}
    <p class="col-span-5 col-start-2 text-orange-600">Je participe !</p>
  {:else}
    <p class="col-span-5 col-start-2 text-red-500">Je n'y participe pas.</p>
  {/if}
  {#if gig.playable}
    <p class="col-span-5 col-start-2 text-orange-600">C'est jouable !</p>
  {:else}
    <p class="col-span-5 col-start-2 text-red-500">C'est pas encore jouable...</p>
  {/if}
</div>
