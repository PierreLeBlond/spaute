<script lang="ts">
  import Errors from './Errors.svelte';

  export let id: string | undefined = undefined;
  export let action: string | undefined = undefined;
  export let enhance: (el: HTMLFormElement) => void;

  export let errors: string[];
</script>

<form
  class="w-full rounded bg-neutral-900 p-2 text-blue-300"
  method="POST"
  {action}
  {id}
  use:enhance
  novalidate
>
  <slot />
  <Errors {errors} />
</form>
