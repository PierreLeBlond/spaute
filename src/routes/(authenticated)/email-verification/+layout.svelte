<script lang="ts">
  import Info from '$lib/components/layout/Info.svelte';
  import Link from '$lib/components/links/Link.svelte';

  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

{#if !data.user.emailVerified}
  <slot />
{:else}
  <Info>Ton <b>email</b> est <b>vérifié</b> !</Info>
  <Link href={data.fromPathname}>Accéder à spaute</Link>
{/if}
