//Server Side Imports
import path from 'path';
import getJSON from '@/lib/getJSON';
//Client-Side Imports
import React from 'react';
import { NextSeo } from 'next-seo';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Custom Components
import Education from '@/components/about/Education';
import Tools from '@/components/about/Tools';
import Technologies from '@/components/about/Technologies';
import Journey from '@/components/about/Journey';
import Header from '@/components/common/Header';
//Images
import DecorativeImageLightMode from '@/images/about-light.webp';
import DecorativeImageDarkMode from '@/images/about-dark.webp';

function About({ userData }) {
    return (
        <React.Fragment>
            <NextSeo
                title='About'
                description='About Me'
            />

            <Header
                title='About Me'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />
            <Education>
                {userData.education}
            </Education>
            <Tools>
                {userData.tools}
            </Tools>
            <Technologies>
                {userData.technologies}
            </Technologies>
            <Journey>
                {userData.journey}
            </Journey>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const CWD = process.cwd();

    return {
        props: {
            userData: getJSON(path.join(CWD, 'data', 'user_data.json'))
        }
    };
}

export default About;