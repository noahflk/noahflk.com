const withMdxEnhanced = require("next-mdx-enhanced");
const rehypePrism = require("@mapbox/rehype-prism");
const readingTime = require("./utils/readingTime");
const sizeOf = require("image-size");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [require("remark-code-titles")],
  rehypePlugins: [rehypePrism],
  extendFrontMatter: {
    process: (mdxContent) => ({
      readingTime: readingTime(mdxContent),
    }),
    phase: "both",
  },
})({
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
      require("./scripts/generate-rss-feed");
    }

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "enhanced-file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
            generateMetadata: (path) => {
              return sizeOf(path);
            },
          },
        },
      ],
    });

    return config;
  },
});
