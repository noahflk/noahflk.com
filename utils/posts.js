// Source: https://github.com/samselikoff/samselikoff.com/blob/master/lib/posts.js

// import fs from "fs";
// import { join } from "path";
// import matter from "gray-matter";
// import readingTime from "utils/readingTime";
const fs = require("fs");
const { join } = require("path");
const matter = require("gray-matter");
const readingTime = require("../utils/readingTime");

const postsDirectory = join(process.cwd(), "pages", "blog");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((slug) => !slug.startsWith("."));
}

function getPostBySlug(slug, fields = []) {
  const pathToPost = join(postsDirectory, slug);
  const files = fs.readdirSync(pathToPost);
  const indexFile = files.find((file) => file.substr(0, file.lastIndexOf(".")) === "index");

  const fullPath = join(pathToPost, indexFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  data.slug = slug;

  return { ...data, readingTime: readingTime(content) };
}

function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

module.exports = { getPostSlugs, getPostBySlug, getAllPosts };
