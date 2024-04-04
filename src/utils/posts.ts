import { getCollection } from 'astro:content';

import type { Post } from '@/types/blog';

export const getSortedPosts = async (): Promise<Post[]> => {
  const posts = await getCollection('posts');
  const blog = await getCollection('blog');

  console.log(posts, 'sdfdslsdjfk');

  const allPosts = [...posts, ...blog];

  return allPosts.sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
};
