// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),

  redirects: {
    '/2023/12/how-to-set-up-fish-shell-in-wsl-2.html':
      'https://www.mpotane.com/blog/post/how-to-set-up-fish-shell-in-wsl-2',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});