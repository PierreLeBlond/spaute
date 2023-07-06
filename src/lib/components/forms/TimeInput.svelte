<script lang="ts">
  import type { ZodValidation, FormPathLeaves } from 'sveltekit-superforms';
  import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
  import type { z, AnyZodObject } from 'zod';

  import Errors from './Errors.svelte';

  type T = $$Generic<AnyZodObject>;

  export let form: SuperForm<ZodValidation<T>, string>;
  export let field: FormPathLeaves<z.infer<T>>;
  export let label: string;

  const { value, errors } = formFieldProxy(form as SuperForm<ZodValidation<T>, unknown>, field);
</script>

<div class="flex flex-col">
  <label
    for="{field}-input"
    class="text-xs">{label}</label
  >
  <input
    id="{field}-input"
    name={field}
    type="time"
    class="h-8 rounded border-red-500 bg-neutral-200 text-sm"
    class:border={$errors}
    bind:value={$value}
  />
  <Errors errors={$errors} />
</div>
