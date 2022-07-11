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

function Snippet({ mdxSource, frontMatter, toc }) {
    const { title, abstract } = frontMatter;

    return (
        <React.Fragment>
            <NextSeo
                title={`${title} | Snippets | ankitkumar.live`}
                description={abstract}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: frontMatter.date,
                        authors: ['https://http://www.ankit-kumar.live/'],
                        tags: [frontMatter.technology]
                    }
                }}
            />

            <Post
                mdxSource={mdxSource}
                frontMatter={frontMatter}
                tagsPropName='technology'
                toc={toc}
                back={{
                    href: '/snippets',
                    name: 'snippets'
                }}
            />
        </React.Fragment>
    );
}

export async function getStaticProps({ params }) {
    const { snippet: title } = params;

    const ROOT = path.join(process.cwd(), 'data', 'snippets');

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
    const ROOT = path.join(process.cwd(), 'data', 'snippets');
    const files = getFrontMatter(getFiles(ROOT));

    return {
        paths: files.map(file => ({ params: { snippet: file.url } })),
        fallback: false
    };
}

export default Snippet;