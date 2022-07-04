//Server Side Props
import path from 'path';
import getFiles from '@/lib/getFiles';
//Client Side Props
import React from 'react';
//Custom Components
import Section from '@/components/common/Section';
import PdfViewer from '@/components/common/PdfViewer';

function Resume({ file }) {
    return (
        <Section id='resume' maxWidth='lg'>
            <PdfViewer file={file} />
        </Section>
    );
}

export async function getStaticProps() {
    const CWD = process.cwd();
    const file = getFiles(path.join(CWD, '/public/resume.pdf'), 'latin1');

    return {
        props: {
            file
        }
    };
}

export default Resume;