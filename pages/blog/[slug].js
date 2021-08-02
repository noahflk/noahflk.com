import { useRouter } from 'next/router';
import { MDXRemote } from 'next-mdx-remote';
import BlogLayout from 'layouts/BlogPost';
import { getFileBySlug, getFiles } from 'utils/mdx';
import MDXComponents from 'components/MDXComponents';

const Blog = ({ post, slug }) => {
    const { isFallback } = useRouter();

    if (isFallback || !post) {
        return <div>Loading...</div>;
    }

    return (
        <BlogLayout frontMatter={post.frontMatter} slug={slug}>
            <MDXRemote
                {...post.mdxSource}
                components={{
                    ...MDXComponents,
                }}
            />
        </BlogLayout>
    );
};

export default Blog;

export const getStaticPaths = async () => {
    const posts = await getFiles();

    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, ''),
            },
        })),
        fallback: true,
    };
};

export const getStaticProps = async ({ params }) => {
    try {
        const post = await getFileBySlug(params.slug);

        return { props: { post, slug: params.slug } };
    } catch (error) {
        // eslint-disable-next-line
        console.log(error);
        return { notFound: true };
    }
};