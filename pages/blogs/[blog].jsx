//Server Side Imports
import fs from 'fs';
import path from 'path';
import getFiles from '@/lib/getFiles';
import getFrontMatter from '@/lib/util/getFrontMatter';
import serialize from '@/lib/serialize';
//Client Side Imports
import React from 'react';
import { NextSeo } from 'next-seo';
//Custom Components
import Post from '@/components/common/PostsLayout/Post';


function Blog({ mdxSource, frontMatter, toc }) {
    const { title, abstract } = frontMatter;

    return (
        <React.Fragment>
            <NextSeo
                title={`${title} | Blogs`}
                description={abstract}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: frontMatter.date,
                        authors: ['https://http://www.ankit-kumar.live/'],
                        tags: frontMatter.tags
                    }
                }}
            />

            <Post
                mdxSource={mdxSource}
                frontMatter={frontMatter}
                tagsPropName='tags'
                toc={toc}
                back={{
                    href: '/blogs',
                    name: 'blogs'
                }}
            />
        </React.Fragment>
    );
}

export async function getStaticProps({ params }) {
    const { blog: title } = params;

    const ROOT = path.join(process.cwd(), 'data', 'blogs');

    let filePath = path.join(ROOT, `${title}.md`);
    if (!fs.existsSync(filePath))
        filePath = path.join(ROOT, `${title}.mdx`);

    const source = getFiles(filePath);
    let { frontMatter, mdxSource } = getFrontMatter(source, true);
    const { code, toc } = await serialize(mdxSource);

    return { props: { mdxSource: code, frontMatter, toc } };
}

export async function getStaticPaths() {
    //Generate routes for all blog pages
    const ROOT = path.join(process.cwd(), 'data', 'blogs');
    const files = getFrontMatter(getFiles(ROOT));

    return {
        paths: files.map(file => ({ params: { blog: file.url } })),
        fallback: false
    };
}

export default Blog;