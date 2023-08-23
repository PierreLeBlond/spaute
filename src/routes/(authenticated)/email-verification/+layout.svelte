<script lang="ts">
  import Link from '$lib/components/links/Link.svelte';

  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

{#if !data.user.emailVerified}
  <slot />
{:else}
  <p class="px-16 pt-8 text-center text-xs">Ton <b>email</b> est <b>vérifié</b> !</p>
  <Link href={data.fromPathname}>Accéder à spaute</Link>
{/if}
