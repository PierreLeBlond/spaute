<script lang="ts">
  export let action: string | undefined = undefined;
</script>

<form
  class="w-full rounded bg-neutral-900 p-2 text-blue-300"
  method="POST"
  {action}
>
  <slot />
</form>
