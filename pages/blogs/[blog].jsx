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
import { NextSeo } from 'next-seo';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
//Custom Components
import Header from '@/components/common/Header';
import Section from '@/components/common/Section';
import MDXLayoutRenderer from '@/components/MDXComponents/MDXLayoutRenderer';
import Comments from '@/components/blogs/Comments';
import Link from '@/components/common/Link';
import SocialShare from '@/components/common/SocialShare';
//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Blog({ mdxSource, frontMatter, toc }) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    const { title, thumbnail, abstract, tags, readingTime: { text: readingTime } } = frontMatter;

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
            <NextSeo
                title={`${title} | Blogs | Portfolio v2`}
                description={abstract}
            />

            {thumbnail && (
                <Header
                    title={title}
                    backgroundImage={`/${thumbnail}`}
                />
            )}

            {/* Meta-Data */}
            <Section id='meta' maxWidth='lg'>

                <Box sx={{
                    py: 2,
                    px: { xs: 2, md: 0 },
                    textAlign: 'center'
                }}>
                    {!thumbnail && <Typography gutterBottom variant='h2' component='h1'>{title}</Typography>}
                    <Typography gutterBottom variant='subtitle1' component='h6'>
                        Published {loaded && `${diff[0]} ${diff[1]}`} ago on {date.format('DD MMMM YYYY')}
                    </Typography>
                    {abstract && (
                        <Typography paragraph variant='body1' gutterBottom align='justify'>
                            {abstract}
                        </Typography>
                    )}
                </Box>

                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        component={Stack}
                        flexWrap='wrap'
                        gap={1}
                        sx={{ justifyContent: ['center', null, 'flex-start'] }}
                    >
                        {tags?.map(tag => (
                            <Chip key={tag} label={tag} color='primary' />
                        ))}
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <SocialShare title={title} />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Stack direction='row-reverse' alignItems='center'>
                            <Typography variant='h6' component='h6'>
                                {readingTime}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider sx={{ mt: 2, mb: 4 }} />
            </Section>

            {/* Blog */}
            <Section id='body' maxWidth='lg'>
                <Box sx={{ px: 4 }}>
                    <MDXLayoutRenderer
                        mdxSource={mdxSource}
                        frontMatter={frontMatter}
                        toc={toc}
                    />
                </Box>
            </Section>

            {/* Footer */}
            <Section maxWidth='lg'>
                <Divider sx={{ my: 2 }} />
                <Stack direction='row' justifyContent='space-between'>
                    <Link href='/blogs' muiLinkProps={{ underline: 'none' }}>
                        <Button variant='text' startIcon={<ArrowBackIcon />}>
                            Go back to blogs
                        </Button>
                    </Link>
                    <Button
                        variant='text'
                        startIcon={<ArrowUpwardIcon />}
                        onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
                    >
                        Go back to top
                    </Button>
                </Stack>
                <Comments />
            </Section>
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