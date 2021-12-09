import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

function Section(props) {
    const { id, sx, children, gutterBottom, maxWidth, minHeight } = props;
    const theme = useTheme();

    return (
        <Container
            maxWidth={maxWidth ? maxWidth : false}
            id={id}
            sx={{
                ...sx,
                ...(minHeight && { minHeight: '95vh' }),
                marginTop: 0,
                ...(gutterBottom && { marginBottom: theme.spacing(6) })
            }}>
            {children}
        </Container>
    );
}

export default Section;