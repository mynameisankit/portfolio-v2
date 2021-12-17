import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';
//Custom Components
import Code from '@/components/MDXComponents/Code';

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
    a: ({ href, children, title, ...rest }) => (
        <Link
            href={`/${href}`}
            rel='noopener noreferrer'
            passHref
        >
            <MuiLink {...rest}>
                {children || title}
            </MuiLink>
        </Link>
    ),
    img: ({ src, alt, height, width, layout }) => (
        <Box sx={{
            position: 'relative',
            ...(!layout && {
                height: height ? height : 400,
                width: width ? width : 400,
            }),
            overflow: 'hidden',
        }}>
            <Image
                src={`/${src}`}
                objectFit='cover'
                alt={alt}
                {...rest}
                {...(
                    layout ? {
                        height: height ? height : 400,
                        width: width ? width : 400,
                        layout: 'fill'
                    } : { layout }
                )}
            />
        </Box>
    ),
    pre: Code,
};

export default MDXComponents;