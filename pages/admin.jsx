import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';
//CMS Config
import config from '@/cms/config';

const CMS = dynamic(() =>
    import('netlify-cms-app').then((cms) => {
        cms.init({ config });
    }),
    {
        ssr: false, loading: () => (
            <Section maxWidth={false} minHeight>
                <Typography variant='h2' component='h2' align='center'>
                    Loading...
                </Typography>
            </Section>
        )
    }
);

function AdminPage() {
    return (
        <React.Fragment>
            <Head>
                <title>Portfolio v2 | Admin Panel</title>
            </Head>
            <CMS />
        </React.Fragment>
    );
};

export default AdminPage;