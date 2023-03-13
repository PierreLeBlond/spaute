<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: gigs = data.gigs;
</script>

<ul class="grid grid-cols-1 gap-y-2 pb-2">
  {#each gigs as gig}
    <li class="w-64">
      <div
        class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
      >
        <div>
          <p class="text-center">
            {gig.name}
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-geo-alt-fill inline-block"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
            />
          </svg>
          <p class="inline-block">
            {gig.location}
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-calendar-fill inline-block"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"
            />
          </svg>
          <p class="inline-block">
            {gig.date.toDateString()}
          </p>
        </div>
        {#if gig.playable}
          <p class="text-green-600">Jouable !</p>
        {:else}
          <p class="text-red-600">Pas jouable...</p>
        {/if}
      </div>
    </li>
  {/each}
</ul>
<div
  class="w-64 p-2 border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
>
  <p class="text-center">Add a gig</p>
  <form class="grid grid-cols-2 gap-y-2" method="POST">
    <label for="name-input"> name </label>
    <input type="text" class="bg-zinc-600" name="name" id="name-input" />
    <label for="location-input"> location </label>
    <input
      type="text"
      class="bg-zinc-600"
      name="location"
      id="location-input"
    />
    <label for="date-input"> date </label>
    <input type="date" class="bg-zinc-600" name="date" id="date-input" />
    <button class="col-span-2 w-full p-2 border rounded border-yellow-600"
      >Add</button
    >
  </form>
</div>
