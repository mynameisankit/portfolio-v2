//Utility Imports
import Fuse from 'fuse.js';
//Server Side Imports
import path from 'path';
import getFiles from '@/lib/getFiles';
import getFrontMatter from '@/lib/util/getFrontMatter';
//Client Side Imports
import React from 'react';
import Divider from '@mui/material/Divider';
//Custom Components
import Post from '@/components/blogs/Post';
import Header from '@/components/common/Header';
import PostsLayout from '@/components/common/PostsLayout';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Image
import DecorativeImageLightMode from '@/images/blogs-light.png';
import DecorativeImageDarkMode from '@/images/blogs-dark.png';

function Blogs({ blogs, paginationSettings, fuzzySearchProps }) {
    return (
        <React.Fragment>
            <Header
                title='Blogs'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />
            <PostsLayout
                posts={blogs}
                tagsPropName='tags'
                paginationSettings={paginationSettings}
                fuzzySearchProps={fuzzySearchProps}
                divider={
                    <Divider component='div' sx={{
                        color: 'text.primary'
                    }} />
                }
                postsProp={{
                    container: {
                        spacing: 0
                    },
                    item: {
                        xs: 12
                    }
                }}
            >
                {data => <Post {...data} />}
            </PostsLayout>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const ROOT = path.join(process.cwd(), 'data', 'blogs');
    const files = getFrontMatter(getFiles(ROOT));
    files.forEach(file => file.url = `/blogs/${file.url}`);

    //Page Settings
    const paginationSettings = {
        maxRows: 10
    };

    //Fuzzy Search
    const options = {
        keys: ['title', 'tags']
    };

    // Create the Fuse index
    const fuzzySearchIndex = Fuse.createIndex(options.keys, files).toJSON();

    return {
        props: {
            blogs: files,
            fuzzySearchProps: {
                index: JSON.stringify(fuzzySearchIndex),
                options
            },
            paginationSettings
        }
    };
}

export default Blogs;