<script lang="ts">
  import GigsPage from '$lib/components/gigs/GigsPage.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<GigsPage
  player={data.currentPlayer}
  gigs={data.gigs}
/>
