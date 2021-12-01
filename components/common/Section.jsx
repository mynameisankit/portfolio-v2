import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

function Section(props) {
    const { id, sx, gutterBottom, maxWidth, children } = props;
    const theme = useTheme();

    return (
        <Container
            maxWidth={maxWidth ? maxWidth : false}
            id={id}
            sx={{
                ...sx,
                height: '100%',
                ...(gutterBottom && {marginBottom: theme.spacing(4)})
            }}>
            {children}
        </Container>
    );
}

export default Section;