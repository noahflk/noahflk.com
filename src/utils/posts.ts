import { getCollection } from 'astro:content';

import type { Post } from '@/types/blog';

export const getSortedPosts = async (): Promise<Post[]> => {
  const allPosts = await getCollection('blog');

  return allPosts.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
};
