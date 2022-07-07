import React from 'react';
//Custom Components
import Header from '@/components/common/Header';
import Section from '@/components/common/Section';
import PdfViewer from '@/components/common/PdfViewer';
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Image
import DecorativeImageLightMode from '@/images/resume-light.jpg';
import DecorativeImageDarkMode from '@/images/resume-dark.jpg';

function Resume() {
    return (
        <React.Fragment>
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