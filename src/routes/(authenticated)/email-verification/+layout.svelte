<script lang="ts">
  import Link from '$lib/components/links/Link.svelte';

  import type { LayoutData } from './$types';

  export let data: LayoutData;
</script>

<div class="flex-col items-center justify-center p-8">
  {#if !data.user.emailVerified}
    <slot />
  {:else}
    <h1 class="px-16 py-8 text-center text-xs">Ton <b>email</b> est <b>vérifié</b> !</h1>
    <div class="p-8">
      <Link href={data.fromPathname}>Accéder à spaute</Link>
    </div>
  {/if}
</div>
