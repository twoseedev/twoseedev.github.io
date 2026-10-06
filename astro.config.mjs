// @ts-check
import { defineConfig } from 'astro/config';

// If you add a custom domain later, change `site` to it.
export default defineConfig({
  site: 'https://twoseedev.github.io',
  vite: {
    // three.js is a single large chunk by design
    build: { chunkSizeWarningLimit: 800 },
  },
});
