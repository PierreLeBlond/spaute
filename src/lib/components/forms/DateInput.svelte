<script lang="ts">
  import Errors from './Errors.svelte';

  export let name: string;
  export let label: string;
  export let value: string;

  export let errors: string[] = [];
</script>

<div class="flex flex-col">
  <label
    for="{name}-input"
    class="text-xs">{label}</label
  >
  <input
    id="{name}-input"
    {name}
    class="h-8 rounded border-red-500 bg-neutral-200 text-sm"
    class:border={errors.length != 0}
    type="date"
    bind:value
  />
  <Errors {errors} />
</div>
