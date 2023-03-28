<script lang="ts">
  import GigPage from '$lib/components/GigPage.svelte';
  import EditLink from '$lib/components/links/EditLink.svelte';
  import ReturnLink from '$lib/components/links/ReturnLink.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  $: gig = data['gig'];
  $: presence = data.presence;
  $: availablePlayers = data.availablePlayers;
  $: unavailablePlayers = data.unavailablePlayers;
  $: remainingPlayers = data.remainingPlayers;
</script>

<div class="flex justify-between">
  <ReturnLink href="/band/{data['band'].id}/gigs" />
  {#if data['isAdmin']}
    <EditLink href="/band/{data['band'].id}/gig/{gig.id}/edit" />
  {/if}
</div>

<GigPage
  {gig}
  {presence}
  {availablePlayers}
  {unavailablePlayers}
  {remainingPlayers}
  joinAction={'?/join'}
  updateAction={'?/update'}
/>
