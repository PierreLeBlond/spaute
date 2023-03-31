<script lang="ts">
  import type { PageData } from './$types';
  import GigsPage from '$lib/components/gigs/GigsPage.svelte';

  export let data: PageData;

  $: presences = data.presences;
  $: newGigs = data.newGigs;
</script>

<GigsPage
  {presences}
  {newGigs}
/>
