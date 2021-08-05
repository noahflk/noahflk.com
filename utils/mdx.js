import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';
import mdxPrism from 'mdx-prism';

const root = process.cwd();
const POST_DIR = 'content'

export async function getFiles() {
    return fs.readdirSync(path.join(root, POST_DIR));
}

export async function getFileBySlug(slug) {
    const source = fs.readFileSync(path.join(root, POST_DIR, `${slug}.mdx`), 'utf8');

    const { data, content } = matter(source);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [
                require('remark-slug'),
                [
                    require('remark-autolink-headings'),
                    {
                        linkProperties: {
                            className: ['anchor']
                        }
                    }
                ],
                require('remark-code-titles')
            ],
            rehypePlugins: [mdxPrism]
        }
    });

    return {
        mdxSource,
        frontMatter: {
            readingTime: readingTime(content),
            slug: slug || null,
            ...data
        }
    };
}

export async function getAllFilesFrontMatter() {
    const files = fs.readdirSync(path.join(root, POST_DIR));

    return files.reduce((allPosts, postSlug) => {
        const source = fs.readFileSync(
            path.join(root, POST_DIR, postSlug),
            'utf8'
        );
        const { data, content } = matter(source);

        return [
            {
                ...data,
                slug: postSlug.replace('.mdx', ''),
                readingTime: readingTime(content),
            },
            ...allPosts
        ];
    }, []);
}