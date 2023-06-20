<script lang="ts">
  export let id: string = '';
  export let label: string;
  export let disabled = false;
</script>

<input
  type="submit"
  value={label}
  name={id}
  {disabled}
  class="h-8 w-full rounded bg-cyan-600 text-sm text-neutral-800 transition-colors hover:cursor-pointer disabled:bg-neutral-300 disabled:text-neutral-400 disabled:hover:cursor-auto"
/>
