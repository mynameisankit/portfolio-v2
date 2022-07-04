import React, { useState, useMemo } from 'react';
import { pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiIconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const IconButton = styled(MuiIconButton)({
    fontSize: 80
});

function PdfViewer({ file, pagination = false }) {
    const theme = useTheme();

    const data = useMemo(() => file, []);

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    const next = () => setPageNumber(pageNumber + 1);
    const prev = () => setPageNumber(pageNumber - 1);

    const isBetweenLgAndXl = useMediaQuery(theme.breakpoints.up('lg'));
    const isBetweenMdAndLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isBetweenSmAndMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    let scale;
    if (isBetweenLgAndXl)
        scale = 1.8;
    else if (isBetweenMdAndLg)
        scale = 1.5;
    else if (isBetweenSmAndMd)
        scale = 1;
    else
        scale = 0.8;

    return (
        <Box sx={{ mb: 8 }}>
            <Paper elevation={5} sx={{
                display: 'flex',
                justifyContent: 'center',
                overflowX: 'hidden'
            }}>
                <Document
                    file={data}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    onLoadError={(error) => console.log(error)}
                >
                    <Page
                        pageNumber={1}
                        renderAnnotationLayer={false}
                        renderTextLayer={false}
                        renderForms={false}
                        renderMode='svg'
                        rotate={0}
                        scale={scale}
                    />
                </Document>
            </Paper>
            {pagination && (
                <Stack direction='row' justifyContent='center' alignItems='center'>
                    <IconButton disabled={pageNumber === 1} onClick={prev} size='large'>
                        <KeyboardArrowLeftIcon fontSize='inherit' />
                    </IconButton>
                    <Typography variant='h5' component='h5'>
                        Page {pageNumber} of {numPages}
                    </Typography>
                    <IconButton disabled={pageNumber === numPages || !numPages} onClick={next} size='large'>
                        <KeyboardArrowRightIcon fontSize='inherit' />
                    </IconButton>
                </Stack>
            )}
        </Box>
    );
}

export default PdfViewer;