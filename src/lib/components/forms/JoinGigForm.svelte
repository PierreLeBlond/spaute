<script lang="ts">
  export let action: string;
</script>

<form
  class="w-full p-2 bg-yellow-600 text-zinc-900 rounded grid grid-cols-1"
  method="POST"
  {action}
>
  <button class="border rounded border-zinc-900">Join</button>
</form>
