<script lang="ts">
  import GigsPage from '$lib/components/gigs/GigsPage.svelte';
  import RightLink from '$lib/components/links/RightLink.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="p-2">
  <RightLink
    href="/band/{data.band.id}/gig"
    label="Créer une presta"
  />
</div>

<GigsPage
  player={data.currentPlayer}
  gigs={data.gigs}
/>
