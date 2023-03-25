<script lang="ts">
  import type { LayoutData } from './$types';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';

  export let data: LayoutData;

  const tabs = [
    {
      href: '/bands',
      key: '/band',
      label: 'mes fanfares'
    },
    {
      href: '/gigs',
      key: '/gig',
      label: 'mes prestas'
    },
    {
      href: '/roles',
      key: '/role',
      label: 'mes pupitres'
    }
  ];
</script>

<SlidingTabs
  href={data.href}
  {tabs}><slot /></SlidingTabs
>
