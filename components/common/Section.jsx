import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function Section({ id, children, maxWidth, minHeight, gutterBottom, sx, ...rest }) {
    const theme = useTheme();

    if (minHeight !== undefined) {
        if (typeof minHeight === 'boolean') {
            if (minHeight)
                minHeight = '95vh';
            else
                minHeight = 0;
        }
    }
    else
        minHeight = 0;

    return (
        <Container
            id={id}
            maxWidth={maxWidth === undefined ? 'lg' : maxWidth}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight,
                mb: theme.spacing(gutterBottom ? gutterBottom : 0),
                ...sx
            }}
            {...rest}
        >
            <Box sx={{ width: 1 }}>
                {children}
            </Box>
        </Container>
    );
}

export default Section;