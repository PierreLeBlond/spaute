<script lang="ts">
  import type { LayoutData } from './$types';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';

  export let data: LayoutData;

  const tabs = [
    {
      href: `/band/${data.band.id}/players`,
      key: `/band/${data.band.id}/player`,
      label: 'ses membres'
    },
    {
      href: `/band/${data.band.id}/gigs`,
      key: `/band/${data.band.id}/gig`,
      label: 'ses prestas'
    },
    {
      href: `/band/${data.band.id}/voices`,
      key: `/band/${data.band.id}/voice`,
      label: 'ses pupitres'
    }
  ];
</script>

<SlidingTabs
  href={data.href}
  {tabs}><slot /></SlidingTabs
>
