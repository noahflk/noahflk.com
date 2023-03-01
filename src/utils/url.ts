import type { Post } from '@/types/blog';

export const getBlogUrl = (post: Post) => `/blog/${post.slug}`;
