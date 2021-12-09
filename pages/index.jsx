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
    const { data: { featured, projects, socialMedia } } = props;

    return (
        <React.Fragment>
            <Intro  socialMedia={socialMedia} />
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
        "socialMedia": {
            fileName: 'socialMedia.json'
        }
    };

    const data = {};
    for (let i in directories) {
        let fileName;

        if (directories[i] instanceof Object)
            fileName = directories[i].fileName;
        else
            fileName = i;

        data[i] = retrieveDataSync(fileName, 'JSON');
    }

    return { props: { data } };
}

export default Home;