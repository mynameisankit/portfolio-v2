import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//Custom Components
import Pre from './Pre';
import Image from './Image';
import Link from '@/components/common/Link';

const MDXComponents = {
    ...(
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((acc, curr) => (
            acc[curr] = ({ variant, children, ...rest }) => (
                <Typography component={curr} variant={curr} sx={{ mb: 3 }} {...rest}>
                    {children}
                </Typography>
            ), acc
        ), {})
    ),
    p: ({ children, ...rest }) => (
        <Typography variant='body1' sx={{ mb: 3 }} {...rest}>
            {children}
        </Typography>
    ),
    a: Link,
    img: Image,
    pre: Pre,
    code: ({ children, ...rest }) => (
        <Typography
            component='span'
            variant='body1'
            sx={{
                display: 'inline-block',
                backgroundColor: 'secondary.main',
                contrastText: 'text.main',
                px: 1, borderRadius: 4
            }}
            {...rest}
        >
            {children}
        </Typography>
    ),
    Blockquote: ({ children, ...rest }) => (
        <Stack
            sx={{
                p: 2, mb: 2, borderRadius: 1,
                direction: 'row',
                backgroundColor: 'secondary.main',
                borderLeft: 4,
                borderColor: 'primary.main',
                fontStyle: 'italic',
            }}
            {...rest}
        >
            <Typography variant='subtitle1'>
                &ldquo;{children}&ldquo;
            </Typography>
        </Stack>
    )
};

export default MDXComponents;