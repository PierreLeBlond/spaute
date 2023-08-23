<script lang="ts">
  import List from '$lib/components/layout/List.svelte';
  import ListLinkItem from '$lib/components/layout/ListLinkItem.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';
  import type { Gig, Presence } from '@prisma/client';
  import { DateTime } from 'luxon';

  import type { PageData } from './$types';

  export let data: PageData;

  const presences = new Map<Gig, Presence | null>(
    data.gigs.map((gig) => [gig, gig.presences.find((presence) => presence.playerId == data.currentPlayer.id) || null])
  );
</script>

<div class="py-8 px-16">
  <RightLink href="/gig">Ajouter une presta</RightLink>
</div>

<List>
  {#if data.gigs.length == 0}
    <p class="text-xs">Pas de prestas à l'horizon. On se fait chier...</p>
  {:else}
    {#each data.gigs as gig}
      {@const presence = presences.get(gig)}
      <ListLinkItem>
        <a
          href="./gig/{gig.id}"
          class="block w-full rounded p-2 text-sm"
        >
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
              {#if gig.band}
                <p class="col-span-5 text-sm">{gig.band.name}</p>
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
        </a>
      </ListLinkItem>
    {/each}
  {/if}
</List>
