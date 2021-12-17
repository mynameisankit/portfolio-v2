import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import config from '@/cms/config';

const CMS = dynamic(() =>
    import('netlify-cms-app').then((cms) => {
        cms.init({ config });
    }),
    { ssr: false, loading: () => <p>Loading...</p> }
);

function AdminPage(props) {
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