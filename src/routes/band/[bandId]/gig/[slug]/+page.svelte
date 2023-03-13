<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  $: gig = data.gig;
</script>

<h1>
  {gig.name}, a gig scheduled on the {gig.date.toString()}, at {gig.location}
</h1>
