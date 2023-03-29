<script lang="ts">
  export let id: string;
  export let label: string;

  export let info: string = ' ';
  export let error: string = '';
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
    class:border={!!error}
  >
    <slot />
  </select>
  <p
    class="h-4 text-xs"
    class:text-red-300={error}
  >
    {error || info}
  </p>
</div>
