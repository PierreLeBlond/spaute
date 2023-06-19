<script lang="ts">
  import type { Constraints } from './Constraints';
  import Errors from './Errors.svelte';

  export let name: string;
  export let label: string;
  export let value: string | null = '';
  export let constraints: Constraints = {};

  export let errors: string[];
</script>

<div class="flex flex-col">
  <div class="flex justify-between text-xs">
    <label
      for="{name}-input"
      class="text-xs">{label}</label
    >
    {#if !!constraints.maxlength}
      <p>{value?.length || 0}/{constraints.maxlength}</p>
    {/if}
  </div>
  <input
    id="{name}-input"
    {name}
    class="h-8 rounded border-red-500 bg-neutral-200 text-sm"
    class:border={errors.length != 0}
    type="text"
    bind:value
    {...constraints}
  />
  <Errors {errors} />
</div>
