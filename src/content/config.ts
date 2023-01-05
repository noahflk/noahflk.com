import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: {
    title: z.string(),
    pubDate: z.string(),
    summary: z.string(),
  },
});

export const collections = {
  lel: blog,
};
