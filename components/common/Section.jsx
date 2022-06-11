import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function Section({ heading, caption, subtitle, children, maxWidth, minHeight, gutterBottom, sx, ...rest }) {
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
            <Box sx={{ width: 1, height: 1 }}>
                {heading && (
                    <Typography gutterBottom={!caption} variant='h3' component='h1' align='center'>
                        {heading}
                    </Typography>
                )}
                {caption && (
                    <Typography paragraph variant='body1' align='center' sx={{ mb: 5 }}>
                        {caption}
                    </Typography>
                )}
                {children}
            </Box>
        </Container>
    );
}

export default Section;