<script lang="ts">
  import GigPage from "$lib/components/GigPage.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;

  $: gig = data.gig;
  $: presence = data.presence;
  $: availablePlayers = data.availablePlayers;
  $: unavailablePlayers = data.unavailablePlayers;
  $: remainingPlayers = data.remainingPlayers;
</script>

<GigPage {gig} {presence} {availablePlayers} {unavailablePlayers} {remainingPlayers}
joinAction={"?/join"} updateAction={"?/update"}></GigPage>

