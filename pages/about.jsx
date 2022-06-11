import React from 'react';
//Custom Components
import Colophon from '@/components/about/Colophon';
import Education from '@/components/about/Education';
import Tools from '@/components/about/Tools';
import Technologies from '@/components/about/Technologies';

function About() {
    return (
        <React.Fragment>
            <Colophon />
            <Education />
            <Tools />
            <Technologies />
        </React.Fragment>
    );
}

export default About;