//Server Side Imports
import path from 'path';
import getFiles from '@/lib/getFiles';
import serialize from '@/lib/serialize';
//Client Side Imports
import React from 'react';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';
import MDXLayoutRenderer from '@/components/MDXComponents/MDXLayoutRenderer';

function Colophon({ mdxSource }) {
    return (
        <Section maxWidth='md' minHeight>
            <Typography variant='h2' component='h1' gutterBottom>Colophon</Typography>
            <MDXLayoutRenderer mdxSource={mdxSource} />
        </Section>
    );
}

export async function getStaticProps() {
    //Generate routes for all blog pages
    const ROOT = path.join(process.cwd(), 'data', 'colophon.md');
    const { data: source } = getFiles(ROOT);

    const { code } = await serialize(source);

    return {
        props: {
            mdxSource: code
        }
    };
}

export default Colophon;