<script lang="ts">
  import { page } from '$app/stores';
  import Menu from '$lib/components/Menu.svelte';
  import { cubicOut } from 'svelte/easing';
  import type { EasingFunction } from 'svelte/transition';

  import type { Tab } from './Tab';

  export let href: string | undefined;

  export let tabs: Tab[];

  let lastIndex: number;
  let direction: number;

  $: {
    direction = Math.sign($page.data['index'] - lastIndex);
    lastIndex = $page.data['index'];
  }

  let clientWidth: number;

  const slide = (
    node: HTMLElement,
    {
      delay = 0,
      duration = 400,
      easing = cubicOut,
      sign
    }: {
      delay?: number;
      duration?: number;
      easing?: EasingFunction;
      sign: number;
    }
  ) => {
    return {
      delay,
      duration,
      easing,
      tick: (t: number) => {
        node.style.transform = `translate(${(1 - t) * sign * direction * clientWidth}px, 0)`;
      }
    };
  };
</script>

<Menu {tabs} />

<div
  bind:clientWidth
  class="relative h-full w-full overflow-hidden"
>
  {#key href}
    <div
      in:slide|local={{ sign: 1 }}
      out:slide|local={{ sign: -1 }}
      class="absolute flex h-full w-full flex-col"
    >
      <slot />
    </div>
  {/key}
</div>
