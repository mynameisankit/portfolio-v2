//Utility Imports
import { MDXProvider } from '@mdx-js/react';
import dayjs from 'dayjs';
//Server Side Imports
import readDirSync from '../../lib/readDirSync';
import retrieveDataSync from '../../lib/retrieveDataSync';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import createURL from '../../lib/createURL';
//Client Side Imports
import React, { useState, useEffect } from 'react';
import { MDXRemote } from 'next-mdx-remote';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//Custom Components
import ReactIcons from '../../components/common/ReactIcons';
import Footer from '../../components/blogs/Footer';
//MDX Components
import MDXComponents from '../../components/MDXComponents';

function copyText(text) {
    navigator?.clipboard.writeText(text);
    return;
}

function Blog({ source, frontMatter }) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    const { title, abstract, tags } = frontMatter;
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
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {tags.map(tag => (
                            <Button
                                key={tag}
                                variant='outlined'
                                startIcon={<ReactIcons icon={tag} />}
                            >
                                {tag}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h6'>
                            Published {loaded && `${diff[0]} ${diff[1]}`} ago on {date.format('DD MMMM YYYY')}
                        </Typography>
                        <Button
                            variant='contained'
                            disableElevation
                            onClick={() => copyText(window?.location.href)}
                        >
                            Share
                        </Button>
                    </Box>
                </Container>
            </Box>
            {/* Blog */}
            <Container id='body' maxWidth='lg' sx={{ mb: 4 }}>
                <MDXProvider components={MDXComponents}>
                    <MDXRemote
                        {...source}
                        scope={frontMatter}
                    />
                </MDXProvider>
            </Container>
            <Footer />
        </React.Fragment>
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