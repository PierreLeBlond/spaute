<script lang="ts">
  import { page } from '$app/stores';
  import Menu from '$lib/components/layout/Menu.svelte';
  import { cubicOut } from 'svelte/easing';
  import type { EasingFunction } from 'svelte/transition';

  import NavBar from './NavBar.svelte';

  export let href: string | undefined;

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

<Menu />

<div
  bind:clientWidth
  class="relative h-full w-full overflow-hidden"
>
  {#key href}
    <div
      in:slide={{ sign: 1 }}
      out:slide={{ sign: -1 }}
      class="absolute flex h-full w-full flex-col items-center"
    >
      <NavBar></NavBar>
      <div class="flex w-full flex-col items-center overflow-y-auto pb-8">
        <slot />
      </div>
    </div>
  {/key}
</div>
