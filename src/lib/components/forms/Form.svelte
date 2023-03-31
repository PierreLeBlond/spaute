<script lang="ts">
  export let action: string | undefined = undefined;
</script>

<form
  class="h-full w-full overflow-y-auto rounded bg-neutral-900 p-2 text-blue-300"
  method="POST"
  {action}
>
  <slot />
</form>
