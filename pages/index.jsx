//Server Side Imports
import path from 'path';
import getJSON from '@/lib/getJSON';
//Client-Side Imports
import React from 'react';
//Custom Components
import Intro from '@/components/home/Intro';
import Contact from '@/components/home/Contact';

function Home({ featured, projects }) {
    return (
        <React.Fragment>
            <Intro />
            <Contact />
        </React.Fragment>
    )
}

export default Home;