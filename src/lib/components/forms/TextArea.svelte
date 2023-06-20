<script lang="ts">
  import Errors from './Errors.svelte';

  export let name: string;
  export let label: string;
  export let value: string | null = '';
  export let maxlength: number = 320;

  export let errors: string[] = [];
</script>

<div class="flex h-full flex-col">
  <div class="flex justify-between text-xs">
    <label
      for="{name}-input"
      class="text-xs">{label}</label
    >
    <p>{value?.length || 0}/{maxlength}</p>
  </div>
  <textarea
    id="{name}-input"
    {name}
    class="grow rounded border-red-500 bg-neutral-200 text-sm"
    class:border={errors.length != 0}
    bind:value
    {maxlength}
  />
  <Errors {errors} />
</div>
