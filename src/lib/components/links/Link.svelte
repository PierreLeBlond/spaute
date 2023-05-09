<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  class="flex h-8 w-full items-center justify-center rounded bg-blue-300 text-center text-sm text-neutral-900"
  ><slot /></a
>
