import React from 'react';
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
        <Typography component='p' variant='body1' sx={{ mb: 3 }} {...rest}>
            {children}
        </Typography>
    ),
    a: Link,
    img: Image,
    pre: Pre
};

export default MDXComponents;