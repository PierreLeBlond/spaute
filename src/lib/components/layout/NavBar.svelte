<script lang="ts">
  import { page } from '$app/stores';
  import EditLink from '../links/EditLink.svelte';
  import ReturnLink from '../links/ReturnLink.svelte';
</script>

<div class="flex w-full max-w-md items-center justify-between">
  {#if $page.data.nav?.return}
    <ReturnLink href={$page.data.nav.return} />
  {:else}
    <div class="h-12 w-12"></div>
  {/if}
  {#if $page.data.nav?.label}
    <p class="text-sm font-bold">{$page.data.nav.label}</p>
  {/if}
  {#if $page.data.nav?.edit}
    <EditLink href={$page.data.nav.edit} />
  {:else}
    <div class="h-12 w-12"></div>
  {/if}
</div>
