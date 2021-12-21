//Utility Imports
import dayjs from 'dayjs';
//Server Side Imports
import fs from 'fs';
import path from 'path';
import getFiles from '@/lib/getFiles';
import getFrontMatter from '@/lib/util/getFrontMatter';
import serialize from '@/lib/serialize';
//Client Side Imports
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Footer from '@/components/blogs/Footer';
import MDXLayoutRenderer from '@/components/MDXComponents/MDXLayoutRenderer';

function Blog({ mdxSource, frontMatter, toc }) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    const { title, abstract, tags, readingTime: { text: readingTime } } = frontMatter;
    let { date: unformattedDate } = frontMatter;
    const date = dayjs(unformattedDate);

    let diff = [0, 'none'];
    if (loaded) {
        diff = [dayjs().diff(date, 'month'), 'months'];
        if (diff[0] === 0)
            diff = [dayjs().diff(date, 'day'), 'days'];
    }

    return (
        <React.Fragment>
            {/* Meta-Data */}
            <Box sx={{
                backgroundColor: 'secondary.main',
                width: 1, py: 2,
                mb: {
                    xs: 3,
                    md: 8
                }
            }}>
                <Container id='meta' maxWidth='lg'>
                    <Typography variant='h1'>{title}</Typography>
                    {abstract && (
                        <Typography variant='subtitle1'>
                            {abstract}
                        </Typography>
                    )}
                    <Typography variant='subtitle1'>
                        {readingTime}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h6'>
                            Published {loaded && `${diff[0]} ${diff[1]}`} ago on {date.format('DD MMMM YYYY')}
                        </Typography>
                    </Box>
                </Container>
            </Box>
            {/* Blog */}
            <Container id='body' maxWidth='lg' sx={{ mb: 4 }}>
                <MDXLayoutRenderer
                    mdxSource={mdxSource}
                    toc={toc}
                />
            </Container>
            <Footer />
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
        //TODO: Add a not found page for blogs
        fallback: false,
    };
}

export default Blog;