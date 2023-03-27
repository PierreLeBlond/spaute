<script lang="ts">
  import type { LayoutData } from '../band/[bandId]/$types';
  import SlidingTabs from '$lib/components/SlidingTabs.svelte';

  export let data: LayoutData;

  const tabs = [
    {
      href: `/admin/instruments`,
      key: `/admin/instrument`,
      label: 'Instruments'
    }
  ];
</script>

<SlidingTabs
  href={data.href}
  {tabs}><slot /></SlidingTabs
>
