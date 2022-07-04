import React from 'react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import("./pdf-viewer"), { ssr: false });

function PDF({ ...rest }) {
    return <PDFViewer {...rest} />;
}

export default PDF;