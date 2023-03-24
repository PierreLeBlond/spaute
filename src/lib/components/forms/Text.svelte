<script lang="ts">
  export let id: string;
  export let label: string;
  export let value: string = '';
  export let maxlength: number = 32;

  export let info: string = ' ';
  export let error: string = '';
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
    class:border={!!error}
    type="text"
    bind:value
    {maxlength}
  />
  <p
    class="h-4 text-xs"
    class:text-red-300={error}
  >
    {error || info}
  </p>
</div>
