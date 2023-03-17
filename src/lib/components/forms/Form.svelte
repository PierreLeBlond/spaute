<script lang="ts">
  export let action: string | undefined = undefined;
</script>

<form
  class="w-full overflow-y-auto rounded border border-amber-300 bg-neutral-900 p-2"
  method="POST"
  {action}
>
  <slot />
</form>
