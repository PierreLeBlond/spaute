<script lang="ts">
  export let id: string;
  export let label: string;
</script>

<div class="flex flex-col">
  <label
    for="{id}-input"
    class="text-xs">{label}</label
  >
  <select
    name={id}
    id="{id}-input"
    class="h-8 rounded bg-neutral-800 text-sm"
  >
    <slot />
  </select>
</div>
