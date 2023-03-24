<script lang="ts">
  import { fade } from 'svelte/transition';

  export let id: string;
  export let label: string;
  export let checked: boolean = false;
</script>

<div class="flex flex-col">
  <label
    for="{id}-input"
    class="text-xs">{label}</label
  >
  <div class="relative grid h-8 grid-cols-3 items-center justify-center">
    {#if !checked}
      <p
        transition:fade|local
        class="col-start-1 text-center text-red-300"
      >
        non
      </p>
    {/if}
    <input
      id="{id}-input"
      name={id}
      bind:checked
      class="col-start-2 mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none justify-self-center rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-blue-300 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-blue-300 checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-blue-300 checked:focus:bg-blue-300 checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-blue-300 dark:checked:after:bg-blue-300"
      type="checkbox"
    />
    {#if checked}
      <p
        transition:fade|local
        class="col-start-3 text-center text-green-300"
      >
        oui
      </p>
    {/if}
  </div>
</div>
