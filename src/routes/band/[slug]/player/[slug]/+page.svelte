<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: player = data.player;
</script>

<h1>
  Hello {player.name} !
</h1>
