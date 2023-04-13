<script lang="ts">
  export let action: string | undefined = undefined;
  export let errors: string[] = [];
</script>

<form
  class="w-full rounded bg-neutral-900 p-2 text-blue-300"
  method="POST"
  {action}
>
  <slot />
  {#if errors.length == 0}
    <p class="h-4 pt-1" />
  {/if}
  {#each errors as error}
    <p class="h-4 pt-1 text-xs text-red-300">
      {error}
    </p>
  {/each}
</form>
