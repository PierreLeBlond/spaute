<script lang="ts">
  export let disabled = false;
</script>

<button
  {disabled}
  type="button"
  on:click
  class="h-8 w-full rounded bg-blue-300 text-sm text-neutral-900 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:hover:cursor-auto"
  ><slot /></button
>
