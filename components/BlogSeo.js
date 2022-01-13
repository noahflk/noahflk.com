import React from "react";
import { NextSeo, ArticleJsonLd } from "next-seo";

import { AUTHOR } from "utils/configuration";

const generateOgImage = (title) => {
  const urlText = encodeURI(`http://banner.noahflk.com/${title}.png?`);
  const params = encodeURIComponent(
    "theme=dark&md=1&subtitle=noahflk.com&image=https://noahflk.com/static/images/colorful-logo.png&color=#23f6416c",
  );

  return {
    url: urlText + params,
    alt: title,
  };
};

const BlogSeo = ({ title, summary, date: publishedAt, url, image }) => {
  const date = new Date(publishedAt).toISOString();
  const route = /\/blog\/(.*)\/index/.test(url) || url === "/index" ? url.slice(0, -"/index".length) : url;

  const featuredImage = {
    url: image,
    alt: title,
  };

  return (
    <>
      <NextSeo
        title={`${title} – ${AUTHOR}`}
        description={summary}
        canonical={route}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          route,
          title,
          description: summary,
          images: image ? [featuredImage] : [generateOgImage(title)],
        }}
      />
      <ArticleJsonLd
        authorName={AUTHOR}
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName={AUTHOR}
        title={title}
        url={route}
      />
    </>
  );
};

export default BlogSeo;
