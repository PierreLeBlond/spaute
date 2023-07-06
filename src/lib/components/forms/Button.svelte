<script lang="ts">
  import { Firework } from 'svelte-loading-spinners';
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

<div class="relative flex h-8 w-full">
  <input
    type="submit"
    value={$submitting ? '' : label}
    name={id}
    disabled={(disabledWhenNotTainted && !$tainted) || $submitting}
    class="flex h-8 w-full justify-center rounded bg-cyan-600 text-sm text-neutral-800 transition-colors hover:cursor-pointer disabled:bg-neutral-300 disabled:text-neutral-400 disabled:hover:cursor-auto"
    class:bg-red-500={deleting}
  />
  {#if $submitting}
    <div class="absolute left-1/2 -translate-x-1/2">
      <Firework
        color="#0891b2"
        size="24"
        unit="px"
      />
    </div>
  {/if}
</div>
