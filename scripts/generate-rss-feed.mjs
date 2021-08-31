import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";
import RSS from "rss";
import matter from "gray-matter";
import { WEBSITE_URL, AUTHOR } from "../utils/configuration.js";

async function generate() {
  const feed = new RSS({
    title: AUTHOR,
    site_url: WEBSITE_URL,
    feed_url: WEBSITE_URL + "/feed.xml",
  });

  const posts = readdirSync(join(process.cwd(), "content"));

  posts.map((name) => {
    const content = readFileSync(join(process.cwd(), "content", name));
    const { data } = matter(content);

    const slug = name.replace(/\.mdx?/, "");

    feed.item({
      title: data.title,
      guid: slug,
      url: `${WEBSITE_URL}/blog/${slug}`,
      date: data.publishedAt,
      description: data.summary,
      author: AUTHOR,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
