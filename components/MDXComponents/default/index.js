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
                <Typography variant={curr} {...rest}>
                    {children}
                </Typography>
            ), acc
        ), {})
    ),
    p: ({ children, ...rest }) => (
        <Typography variant='body1' {...rest}>
            {children}
        </Typography>
    ),
    a: Link,
    img: Image,
    pre: Pre
};

export default MDXComponents;