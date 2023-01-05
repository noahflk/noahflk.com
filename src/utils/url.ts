import type { Post } from '@/types/blog';

export const removeIndexFromSlug = (slug: string) => slug.slice(0, -6);

// slice to remove /index from the end of the slug
export const getBlogUrl = (post: Post) => `/blog/${removeIndexFromSlug(post.slug)}`;
