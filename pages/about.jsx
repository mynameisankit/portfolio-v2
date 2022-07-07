import React from 'react';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Custom Components
import Colophon from '@/components/about/Colophon';
import Education from '@/components/about/Education';
import Tools from '@/components/about/Tools';
import Technologies from '@/components/about/Technologies';
import Journey from '@/components/about/Journey';
import Header from '@/components/common/Header';
//Images
import DecorativeImageLightMode from '@/images/about-light.jpg';
import DecorativeImageDarkMode from '@/images/about-dark.jpg';

function About() {
    return (
        <React.Fragment>
            <Header
                title='About Me'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />
            <Colophon />
            <Education />
            <Tools />
            <Technologies />
            <Journey />
        </React.Fragment>
    );
}

export default About;