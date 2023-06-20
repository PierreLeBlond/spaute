<script
  lang="ts"
  context="module"
>
  let status: number;

  export const sendToast = (message: string) => {
    if (!message || message == '') {
      return;
    }

    let className = 'h-8 text-sm';
    className += !status || status == 200 || status == 302 ? ' !bg-green-300' : ' !bg-red-500';
    toast(message, {
      className
    });
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import toast, { Toaster } from 'svelte-french-toast';

  page.subscribe((p) => {
    status = p.status;
  });
</script>

<div class="relative col-span-2 row-start-2">
  <Toaster />
</div>
