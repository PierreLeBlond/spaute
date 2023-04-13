<script lang="ts">
  import Errors from './Errors.svelte';

  export let id: string;
  export let label: string;

  export let errors: string[] = [];
</script>

<div class="flex flex-col">
  <label
    for="{id}-input"
    class="text-xs">{label}</label
  >
  <select
    name={id}
    id="{id}-input"
    class="h-8 rounded border-red-300 bg-neutral-800 text-sm"
    class:border={errors.length != 0}
  >
    <slot />
  </select>

  <Errors {errors} />
</div>
