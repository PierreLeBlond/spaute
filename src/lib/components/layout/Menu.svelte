<script lang="ts">
  import { page } from '$app/stores';

  $: tabs = $page.data['tabs'];

  $: offsetMap = new Map<string, string>(tabs.map((tab, i) => [tab.key, `${i * 100}%`]));
  $: pathname = $page.url.pathname ?? '';
  $: selectedHref = Array.from(offsetMap.keys()).find((key: string) => pathname.startsWith(key)) as string;
  $: selectedOffset = offsetMap.get(selectedHref);
</script>

<div class="flex w-full items-center justify-center bg-neutral-200">
  <ul class="relative grid w-full grid-cols-3 items-center justify-center py-2 sm:w-1/2">
    <li
      class="absolute col-span-1 col-start-1 h-full w-full transition-all sm:p-2"
      style:left={selectedOffset}
    >
      <div class="h-full w-full rounded-t bg-neutral-100 sm:rounded"></div>
    </li>
    {#each tabs as tab}
      <li class="relative sm:py-2">
        <a
          class="block w-full text-center text-sm text-cyan-600"
          href={tab.href}>{tab.label}</a
        >
      </li>
    {/each}
  </ul>
</div>
