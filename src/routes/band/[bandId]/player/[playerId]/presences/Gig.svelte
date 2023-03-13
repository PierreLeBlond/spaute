<script lang="ts">
  import type { Gig, Player } from "@prisma/client";

  export let player: Player;
  export let gig: Gig;

  const addPresence = async (value: boolean) => {
    await fetch("./presences", {
      method: "POST",
      body: JSON.stringify({
        data: { playerId: player.id, gigId: gig.id, value },
      }),
      headers: {
        "content-type": "application/json",
      },
    });
  };

  let disabled = false;
  const onPresenceButtonClick = async (value: boolean) => {
    disabled = true;
    await addPresence(value);
    disabled = false;
  };
</script>

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
  <div class="grid grid-cols-2 gap-x-2">
    <button
      class="border rounded border-green-600"
      {disabled}
      on:click={() => onPresenceButtonClick(true)}>YES</button
    >
    <button
      class="border rounded border-red-600"
      {disabled}
      on:click={() => onPresenceButtonClick(false)}>NO</button
    >
  </div>
</div>
