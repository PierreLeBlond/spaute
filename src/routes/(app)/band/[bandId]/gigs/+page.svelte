<script lang="ts">
  import GigView from "$lib/components/GigView.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: gigs = data.gigs;
</script>

<ul
  class="p-2 w-full sm:w-96 grid grid-cols-1 gap-y-2 mb-2 overflow-y-auto border grow border-yellow-600 rounded"
>
  {#each gigs as gig}
    <li class="w-full">
      <a
        href="./gig/{gig.id}"
        class="p-2 w-full border border-yellow-200 rounded text-sm grid grid-cols-1 gap-y-1"
      >
        <GigView {gig} band={data.band} />
        {#if gig.playable}
          <p class="text-green-600">Playable !</p>
        {:else}
          <p class="text-red-600">Not playable...</p>
        {/if}
      </a>
    </li>
  {/each}
</ul>

<div
  class="p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-1 gap-y-1 w-full sm:w-96"
>
  <p class="text-sm">Add a gig</p>
  <form class="grid grid-cols-2 gap-y-2" method="POST">
    <label for="name-input"> name </label>
    <input
      type="text"
      class="bg-zinc-900 text-yellow-600"
      name="name"
      id="name-input"
    />
    <label for="location-input"> location </label>
    <input
      type="text"
      class="bg-zinc-900 text-yellow-600"
      name="location"
      id="location-input"
    />
    <label for="date-input"> date </label>
    <input
      type="date"
      class="bg-zinc-900 text-yellow-600"
      name="date"
      id="date-input"
    />
    <button class="col-span-2 border rounded border-zinc-900">Add</button>
  </form>
</div>
