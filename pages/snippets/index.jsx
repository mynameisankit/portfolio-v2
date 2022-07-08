//Utility Imports
import Fuse from 'fuse.js';
//Server Side Imports
import path from 'path';
import getFiles from '@/lib/getFiles';
import getFrontMatter from '@/lib/util/getFrontMatter';
//Client Side Imports
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//Custom Components
import Snippet from '@/components/snippets/Snippet';
import PostsLayout from '@/components/common/PostsLayout';
import Header from '@/components/common/Header';
//Image
import DecorativeImage from '@/images/snippets.jpg';

function Snippets({ snippets, fuzzySearchProps, paginationSettings }) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Header
                title='Snippets'
                backgroundImage={DecorativeImage}
            />
            <PostsLayout
                posts={snippets}
                tagsPropName='technology'
                paginationSettings={paginationSettings}
                fuzzySearchProps={fuzzySearchProps}
                direction={isSmall ? 'column' : 'row'}
            >
                {data => <Snippet {...data} />}
            </PostsLayout>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const ROOT = path.join(process.cwd(), 'data', 'snippets');
    const files = getFrontMatter(getFiles(ROOT));
    files.forEach(file => file.url = `/snippets/${file.url}`);

    //Page Settings
    const paginationSettings = {
        maxRows: 10
    };

    //Fuzzy Search
    const options = {
        keys: ['title', 'technology']
    };

    // Create the Fuse index
    const fuzzySearchIndex = Fuse.createIndex(options.keys, files).toJSON();

    return {
        props: {
            snippets: files,
            fuzzySearchProps: {
                index: JSON.stringify(fuzzySearchIndex),
                options
            },
            paginationSettings
        }
    };
}

export default Snippets;