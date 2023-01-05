import { getBlogUrl } from './../utils/url';
import { getSortedPosts } from './../utils/posts';
import rss from '@astrojs/rss';

export const get = async () => {
  const posts = await getSortedPosts();

  return rss({
    title: 'Noahflk blog ',
    description: 'Tech and personal writing',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      link: getBlogUrl(post),
      title: post.data.title,
      pubDate: new Date(post.data.pubDate),
    })),
    customData: `<language>en-us</language>`,
  });
};
