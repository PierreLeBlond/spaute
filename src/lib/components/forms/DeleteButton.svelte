<script lang="ts">
  export let id: string = '';
  export let label: string;
</script>

<input
  type="submit"
  value={label}
  name={id}
  class="h-8 w-full rounded bg-red-300 text-sm text-neutral-900"
/>
