import React, { useState, useMemo } from 'react';
import { saveAs } from 'file-saver';
import { pdfjs } from 'react-pdf';
//import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
//import 'react-pdf/dist/esm/Page/TextLayer.css';
import { Document as ReactPDFDocument, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Icons
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Document = styled(ReactPDFDocument)({
    lineHeight: 1
});

function PdfViewer({ data, pagination = false }) {
    const theme = useTheme();

    const file = useMemo(() => {
        const file = data;

        if (file instanceof Object) {
            if (!(file.data instanceof Uint8Array))
                file.data = new Uint8Array(file.data);
        }

        return file;
    }, [data]);

    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [hover, setHover] = useState(false);

    const next = () => setPageNumber(pageNumber + 1);
    const prev = () => setPageNumber(pageNumber - 1);

    const isAboveLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isBetweenMdandLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const isBetweenSmandMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isVerySmall = useMediaQuery('@media only screen and (max-width: 300px)');

    let scale;
    if (isAboveLg)
        scale = 2;
    else if (isBetweenMdandLg)
        scale = 1.4;
    else if (isBetweenSmandMd)
        scale = 1;
    else if (isVerySmall)
        scale = 0.4;
    else
        scale = 0.57;

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >

            <Document
                file={file}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                onLoadError={(error) => console.log(error)}
                externalLinkRel='noopener noreferrer'
                externalLinkTarget='_blank'
            >
                <Page
                    pageNumber={pageNumber}
                    renderForms={false}
                    renderMode='canvas'
                    rotate={0}
                    scale={scale}
                />
            </Document>

            <Stack
                component={Paper}
                elevation={10}
                direction='row'
                justifyContent='center'
                alignItems='center'
                spacing={2}
                sx={{
                    mt: 2,
                    position: 'absolute',
                    bottom: 80,
                    userSelect: 'none',
                    opacity: (pagination && hover) ? 1 : 0,
                    transition: theme.transitions.create(['opacity']),
                    backgroundColor: theme.palette.background.default
                }}
            >
                <IconButton disabled={pageNumber === 1} onClick={prev} size='large'>
                    <KeyboardArrowLeftIcon fontSize='inherit' />
                </IconButton>
                <Typography variant='h6' component='h6'>
                    Page {Math.min(pageNumber, numPages)} of {numPages}
                </Typography>
                <IconButton disabled={pageNumber === numPages || !numPages} onClick={next} size='large'>
                    <KeyboardArrowRightIcon fontSize='inherit' />
                </IconButton>
            </Stack>

            <Button
                variant='contained'
                size='large'
                sx={{
                    position: 'absolute',
                    bottom: -20
                }}
                onClick={() => {
                    {/* TODO: ISSUE - Not Working */ }
                    if (file instanceof Object) {
                        const blob = new Blob([file.data], { type: 'application/pdf' });
                        saveAs(blob, `${file.name}.pdf`);
                    }
                    else
                        saveAs(file, file);
                }}
            >
                <Typography variant='h5' component='h5'>
                    Download PDF
                </Typography>
            </Button>

        </Box>
    );
}

export default PdfViewer;