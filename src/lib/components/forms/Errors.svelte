<script lang="ts">
  export let errors: string[];
</script>

{#if errors.length == 0}
  <p class="h-4 pt-1" />
{/if}
{#each errors as error}
  <p class="h-4 pt-1 text-xs text-red-300">
    {error}
  </p>
{/each}
