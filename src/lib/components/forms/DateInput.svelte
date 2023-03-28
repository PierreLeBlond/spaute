<script lang="ts">
  export let id: string;
  export let label: string;
  export let value: Date;

  export let error: string = '';
</script>

<div class="flex flex-col">
  <label
    for="{id}-input"
    class="text-xs">{label}</label
  >
  <input
    id="{id}-input"
    name={id}
    class="h-8 rounded border-red-300 bg-neutral-800 text-sm"
    class:border={error}
    type="datetime-local"
    value={value.toISOString().slice(0, 16)}
  />
  <p class="h-4 text-xs text-red-300">
    {error}
  </p>
</div>
