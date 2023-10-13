import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://noahflk.com',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    prefetch(),
    mdx(),
    svelte(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'poimandres',
    },
  },
});
