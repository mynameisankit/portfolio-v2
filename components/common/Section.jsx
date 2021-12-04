import React from 'react';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

function Section(props) {
    const { id, sx, children, gutterBottom, maxWidth } = props;
    const theme = useTheme();

    return (
        <Container
            maxWidth={maxWidth ? maxWidth : false}
            id={id}
            sx={{
                ...sx,
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                ...(gutterBottom && {marginBottom: theme.spacing(6)})
            }}>
            {children}
        </Container>
    );
}

export default Section;