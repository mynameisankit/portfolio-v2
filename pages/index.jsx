//Server Side Imports
import path from 'path';
import getJSON from '@/lib/getJSON';
//Client-Side Imports
import React from 'react';
//Custom Components
import Intro from '@/components/home/Intro';
import Featured from '@/components/home/Featured';
import Projects from '@/components/home/Projects';
import Contact from '@/components/home/Contact';

function Home({ featured, projects }) {
    return (
        <React.Fragment>
            <Intro />
            <Featured>
                {featured}
            </Featured>
            <Projects>
                {projects}
            </Projects>
            <Contact />
        </React.Fragment>
    )
}

export async function getStaticProps() {
    const CWD = process.cwd();
    return {
        props: {
            featured: getJSON(path.join(CWD, 'data', 'featured')),
            projects: getJSON(path.join(CWD, 'data', 'projects'))
        }
    };
}

export default Home;