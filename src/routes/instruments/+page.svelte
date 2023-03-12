<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  let name: string = "";
  const add = async () => {
    const response = await fetch("./instruments", {
      method: "POST",
      body: JSON.stringify({ data: { name } }),
      headers: {
        "content-type": "application/json",
      },
    });
    const instrument = await response.json();
    data.instruments = [...data.instruments, instrument];
    name = "";
  };
</script>

<h1>Instruments :</h1>

{#each data.instruments as instrument}
  <h2>
    {instrument.name}
  </h2>
{/each}

<input type="text" bind:value={name} />
<button on:click={add}>add</button>
