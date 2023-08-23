import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  // https://github.com/hperrin/svelte-material-ui/issues/375#issuecomment-994158467 for svelte-loading-spinners
  ssr: {
    noExternal: [/^svelte-loading-spinners\//]
  }
});
