<script lang="ts">
  import EditLink from '../links/EditLink.svelte';
  import ReturnLink from '../links/ReturnLink.svelte';

  export let returnHref: string | null = null;
  export let label: string | null = null;
  export let editHref: string | null = null;
</script>

<div class="flex items-center justify-between">
  {#if returnHref}
    <ReturnLink href={returnHref} />
  {:else}
    <div class="h-12 w-12"></div>
  {/if}
  {#if label}
    <p class="text-sm font-bold">{label}</p>
  {/if}
  {#if editHref}
    <EditLink href={editHref} />
  {:else}
    <div class="h-12 w-12"></div>
  {/if}
</div>
