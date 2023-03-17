<script lang="ts">
  export let id: string;
  export let label: string;
</script>

<div class="flex flex-col">
    <label for="{id}-input" class="text-xs text-blue-300">{label}</label>
    <input
      id="{id}-input"
      name="{id}"
      class="bg-neutral-800 text-blue-300 rounded h-8 text-sm"
      type="text"
    />
</div>
