<script lang="ts">
  export let id: string = "";
  export let label: string;
</script>

<input type="submit" value={label} name={id} class="h-8 w-full rounded bg-blue-300 text-neutral-900 text-sm">