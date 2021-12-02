//Server Side Imports
const retrieveDataSync = require('../lib/retrieveDataSync');
//Client-Side Imports
import React from 'react';
//Custom Components
import Intro from '../components/home/Intro';
import Featured from '../components/home/Featured';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';

function Home(props) {
    const { data: { featured, projects } } = props;

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

export async function getStaticProps(context) {
    const directories = {
        "featured": null,
        "projects": null,
    };

    const data = {};
    for (let i in directories)
        data[i] = retrieveDataSync(i, 'JSON');

    return { props: { data } };
}

export default Home;