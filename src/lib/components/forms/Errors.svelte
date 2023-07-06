<script lang="ts">
  export let errors: string[] | undefined;
</script>

{#if !errors}
  <p class="h-4 pt-1" />
{:else}
  {#each errors as error}
    <p class="h-4 pt-1 text-xs text-red-500">
      {error}
    </p>
  {/each}
{/if}
