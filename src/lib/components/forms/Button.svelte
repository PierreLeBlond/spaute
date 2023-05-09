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
  class="h-8 w-full rounded bg-blue-300 text-sm text-neutral-900 transition-colors hover:cursor-pointer disabled:bg-neutral-500 disabled:text-neutral-700"
/>
