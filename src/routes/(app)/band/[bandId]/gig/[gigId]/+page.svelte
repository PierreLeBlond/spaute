<script lang="ts">
  import GigPage from '$lib/components/GigPage.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: gig = data['gig'];
  $: presence = data.presence;
  $: availablePlayers = data.availablePlayers;
  $: unavailablePlayers = data.unavailablePlayers;
  $: remainingPlayers = data.remainingPlayers;
</script>

<ReturnLink href="/band/{data['band'].id}/gigs" />

<GigPage
  {gig}
  {presence}
  {availablePlayers}
  {unavailablePlayers}
  {remainingPlayers}
  joinAction={'?/join'}
  updateAction={'?/update'}
/>
