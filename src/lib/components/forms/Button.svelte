<script lang="ts">
  import type { ZodValidation } from 'sveltekit-superforms';
  import type { SuperForm } from 'sveltekit-superforms/client';

  export let id: string = '';
  export let label: string;
  export let deleting = false;
  export let disabledWhenNotTainted = false;

  type T = $$Generic<AnyZodObject>;

  export let form: SuperForm<ZodValidation<T>, string>;
  const { tainted, submitting } = form;
</script>

<input
  type="submit"
  value={label}
  name={id}
  disabled={(disabledWhenNotTainted && !$tainted) || $submitting}
  class="h-8 w-full rounded bg-cyan-600 text-sm text-neutral-800 transition-colors hover:cursor-pointer disabled:bg-neutral-300 disabled:text-neutral-400 disabled:hover:cursor-auto"
  class:bg-red-500={deleting}
/>
