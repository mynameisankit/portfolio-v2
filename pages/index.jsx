import React from 'react';
import { NextSeo } from 'next-seo';
//Custom Components
import Hero from '@/components/home/Hero';

function Home() {
    return (
        <React.Fragment>
            <NextSeo
                title='Home'
            />

            <Hero />
        </React.Fragment>
    )
}

export default Home;