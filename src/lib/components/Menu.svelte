<script lang="ts">
  import { page } from '$app/stores';
  interface Tab {
    href: string;
    label: string;
  }
  export let tabs: Tab[];
  $: routeMap = new Map<string, string>(tabs.map((tab, i) => [tab.href, `${i * 100}%`]));
  $: pathname = $page.url.pathname ?? '';
  $: selectedOffset = routeMap.get(pathname);
</script>

<ul class="relative grid w-full grid-cols-3 items-center justify-center bg-neutral-800 py-2 sm:w-64">
  <li
    class="absolute col-span-1 col-start-1 h-full w-full rounded-t bg-neutral-900 transition-all"
    style:left={selectedOffset}
  />
  {#each tabs as tab}
    <li class="relative">
      <a
        class="block w-full text-center text-sm text-blue-300"
        href={tab.href}>{tab.label}</a
      >
    </li>
  {/each}
</ul>
