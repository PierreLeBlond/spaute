<script lang="ts">
  import Menu from '$lib/components/Menu.svelte';

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

<Menu {tabs} />

<div class="relative h-full w-full">
  <slot />
</div>
