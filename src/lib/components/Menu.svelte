<script lang="ts">
  import { page } from "$app/stores";
  interface Tab {
    href: string;
    label: string;
  }
  export let tabs: Tab[];
  $: routeMap = new Map<string, string>(
    tabs.map((tab, i) => [tab.href, `${i * 100}%`])
  );
  $: pathname = $page.url.pathname ?? "";
  $: selectedOffset = routeMap.get(pathname);
</script>

<ul
  class="grid grid-cols-3 w-full sm:w-64 items-center justify-center py-2 bg-neutral-800"
>
  {#each tabs as tab}
    <li class="relative">
      <a class="w-full block text-center text-sm text-blue-300" href={tab.href}
        >{tab.label}</a
      >
    </li>
  {/each}
  <li
    class="relative h-0.5 mx-2 border border-amber-300 col-span-1 col-start-1 transition-all"
    style:left={selectedOffset}
  />
</ul>
