<script lang="ts">
  import Errors from './Errors.svelte';

  export let id: string;
  export let label: string;
  export let value: string = '';
  export let maxlength: number = 32;

  export let errors: string[] = [];
</script>

<div class="flex flex-col">
  <div class="flex justify-between text-xs">
    <label
      for="{id}-input"
      class="text-xs">{label}</label
    >
    <p>{value.length}/{maxlength}</p>
  </div>
  <input
    id="{id}-input"
    name={id}
    class="h-8 rounded border-red-300 bg-neutral-800 text-sm"
    class:border={errors.length != 0}
    type="text"
    bind:value
    {maxlength}
  />
  <Errors {errors} />
</div>
