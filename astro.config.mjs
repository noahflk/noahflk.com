import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://noahflk.com',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    svelte(),
    react(),
    markdoc(),
    keystatic(),
  ],
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'poimandres',
    },
  },
  output: 'hybrid',
});
