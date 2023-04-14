<script lang="ts">
  import Button from './Button.svelte';
  import Form from './Form.svelte';
  import { enhance } from '$app/forms';

  export let action: string;
</script>

<Form
  {action}
  errors={[]}
  {enhance}
>
  <div class="grid grid-cols-2 gap-x-2 text-sm">
    <Button
      id={'available'}
      label={'Participe'}
    />
    <Button label={'Ne participe pas'} />
  </div>
</Form>
