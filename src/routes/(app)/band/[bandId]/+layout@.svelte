<script lang="ts">
  import type { LayoutData } from './$types';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';

  export let data: LayoutData;

  const tabs = [
    {
      href: `/band/${data.band.id}`,
      label: 'ses membres'
    },
    {
      href: `/band/${data.band.id}/gigs`,
      label: 'ses prestas'
    },
    {
      href: `/band/${data.band.id}/voices`,
      label: 'ses pupitres'
    }
  ];
</script>

<SlidingTabs
  href={data.href}
  {tabs}><slot /></SlidingTabs
>
