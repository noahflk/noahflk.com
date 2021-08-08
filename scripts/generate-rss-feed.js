/* eslint-disable */

const RSS = require("rss");
const fs = require("fs");
const { getAllPosts } = require("../utils/posts");
const { WEBSITE_URL, AUTHOR } = require("../utils/configuration");

(() => {
  const posts = getAllPosts();

  const feed = new RSS({
    title: AUTHOR,
    site_url: WEBSITE_URL,
    feed_url: WEBSITE_URL + "/feed.xml",
  });

  posts.map((frontMatter) => {
    const { title, summary, date, slug } = frontMatter;

    feed.item({
      title,
      guid: slug,
      url: `${WEBSITE_URL}/blog/${slug}`,
      date,
      description: summary,
      author: AUTHOR,
    });
  });

  const rss = feed.xml({ indent: true });
  fs.writeFileSync("public/feed.xml", rss);
})();
