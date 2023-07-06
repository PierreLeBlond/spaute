<script lang="ts">
  import { sendToast } from '$lib/components/toast/Toaster.svelte';
  import type { ZodValidation } from 'sveltekit-superforms';
  import type { SuperForm } from 'sveltekit-superforms/client';

  import Errors from './Errors.svelte';

  export let action: string | undefined = undefined;

  type T = $$Generic<AnyZodObject>;

  export let form: SuperForm<ZodValidation<T>, string>;

  const { errors, enhance, message, formId } = form;
  message.subscribe(sendToast);
</script>

<form
  id={$formId}
  class="w-full"
  method="POST"
  {action}
  use:enhance
  novalidate
>
  <slot />
  <Errors errors={$errors._errors} />
</form>
