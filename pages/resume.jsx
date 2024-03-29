import React from 'react';
import { NextSeo } from 'next-seo';
//Custom Components
import Header from '@/components/common/Header';
import Section from '@/components/common/Section';
import PdfViewer from '@/components/common/PdfViewer';
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Image
import DecorativeImageLightMode from '@/images/resume-light.webp';
import DecorativeImageDarkMode from '@/images/resume-dark.webp';

function Resume() {
    //Optimize for phone
    return (
        <React.Fragment>
            <NextSeo
                title='Resume'
                description='My Resume'
            />

            <Header
                title='My Resume'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />

            <Section id='resume' maxWidth='lg'>
                <PdfViewer data='resume.pdf' pagination />
            </Section>
        </React.Fragment>
    );
}

export default Resume;