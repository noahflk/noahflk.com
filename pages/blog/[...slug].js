import { useRouter } from "next/router";

import { getFileBySlug, getFiles, formatSlug } from "utils/mdx";
import { MDXLayoutRenderer } from "components/MDXComponents";

export default function Blog({ post }) {
  const { isFallback } = useRouter();
  const { mdxSource, frontMatter } = post;

  if (isFallback || !post) {
    return <div>Loading...</div>;
  }

  return <MDXLayoutRenderer mdxSource={mdxSource} frontMatter={frontMatter} />;
}

export async function getStaticPaths() {
  const posts = getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p).split("/"),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    const post = await getFileBySlug(params.slug);

    if (post.frontMatter.draft) {
      throw Error("Rendering of draft not allowed");
    }

    return { props: { post, slug: params.slug } };
  } catch (error) {
    return { notFound: true };
  }
}
