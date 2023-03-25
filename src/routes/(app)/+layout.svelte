<script lang="ts">
  import type { LayoutData } from './$types';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';

  export let data: LayoutData;

  const tabs = [
    {
      href: '/bands',
      label: 'mes fanfares'
    },
    {
      href: '/gigs',
      label: 'mes prestas'
    },
    {
      href: '/roles',
      label: 'mes pupitres'
    }
  ];
</script>

<SlidingTabs
  href={data.href}
  {tabs}><slot /></SlidingTabs
>
