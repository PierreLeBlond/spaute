<script lang="ts">
  import type { PageData } from './$types';
  import GigsPage from '$lib/components/GigsPage.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';

  export let data: PageData;

  $: presences = data.presences;
  $: newGigs = data.newGigs;
</script>

<div class="p-2">
  <RightLink
    href="/band/{data.band.id}/gig"
    label="Créer une presta"
  />
</div>

<GigsPage
  {presences}
  {newGigs}
/>
