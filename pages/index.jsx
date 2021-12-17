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

function Home(props) {
    const { data: { featured, projects, socialMedia } } = props;

    return (
        <React.Fragment>
            <Intro socialMedia={socialMedia} />
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

export async function getStaticProps(context) {
    const CWD = process.cwd();

    const data = {
        featured: getJSON(path.join(CWD, 'data', 'featured')),
        projects: getJSON(path.join(CWD, 'data', 'projects')),
        socialMedia: getJSON(path.join(CWD, 'data', 'socialMedia.json'))
    };

    return { props: { data } };
}

export default Home;