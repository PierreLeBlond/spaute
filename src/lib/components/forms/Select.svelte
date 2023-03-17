<script lang="ts">
  export let id: string;
  export let label: string;
</script>


<div class="flex flex-col">
  <label for="{id}-input" class="text-xs text-blue-300">{label}</label>
  <select name="{id}" id="{id}-input" class="bg-neutral-800 text-blue-300 h-8 rounded text-sm">
    <slot/>
  </select>
</div>