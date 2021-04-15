import { NextSeo } from "next-seo";
import { Heading, Flex, Stack } from "@chakra-ui/react";

import Layout from "components/Layout";
import BlogPostPreview from "components/BlogPostPreview";
import { WEBSITE_URL, AUTHOR } from "utils/configuration";
import { getAllPosts } from "utils/posts";

const url = `${WEBSITE_URL}/blog`;
const title = `Blog – ${AUTHOR}`;
const description = "My blog posts.";

const Blog = ({ posts }) => (
  <>
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
    <Layout>
      <Stack
        as="main"
        spacing={2}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        width="100%"
        maxWidth="800px"
      >
        <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start" maxWidth="700px" width="100%">
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Blog
          </Heading>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          width="100%"
          mt={8}
        >
          {!posts.length && "No posts found."}
          {posts.map((frontMatter) => {
            return <BlogPostPreview key={frontMatter.title} {...frontMatter} />;
          })}
        </Flex>
      </Stack>
    </Layout>
  </>
);

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
}

export default Blog;
