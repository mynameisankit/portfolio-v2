//Utility Imports
import { MDXProvider } from '@mdx-js/react';
//Server Side Imports
import readDirSync from '../../lib/readDirSync';
import retrieveDataSync from '../../lib/retrieveDataSync';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import createURL from '../../lib/createURL';
//Client Side Imports
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
//MDX Components
import MDXComponents from '../../components/MDXComponents';

function Blog({ source, frontMatter }) {
    return (
        <MDXProvider components={MDXComponents}>
            <MDXRemote
                {...source}
                scope={frontMatter}
            />
        </MDXProvider>
    );
}

export async function getStaticProps(context) {
    const { params } = context;
    const { blog: title } = params;
    const source = retrieveDataSync(path.join('blogs', `${title}.md`));

    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    //Note - Date causes serialization issues
    if (data.date instanceof Date)
        data.date = (data.date).toJSON();

    return {
        props: {
            source: mdxSource,
            frontMatter: data
        },
    };
}

export async function getStaticPaths() {
    //Generate routes for all blog pages
    const files = readDirSync('blogs');
    const paths = files.map(file => createURL('/blogs', file));

    return {
        paths,
        //TODO: Add a not found page for blogs
        fallback: false,
    };
}

export default Blog;