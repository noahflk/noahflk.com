import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    summary: z.string(),
    hidden: z.boolean().optional(),
  }),
});

export const collections = {
  blog,
};
