import React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function Footer(props) {
    return (
        <Box>
            <Typography variant='body1'>
                Want to report any error, suggestion or feedback?{' '}
                <Link
                    href='https://github.com/mynameisankit/portfolio-v2/issues/new'
                    passHref
                >
                    <MuiLink
                        target='_blank'
                        rel='noreferrer noopener'
                    >
                        Open a issue
                    </MuiLink>
                </Link>
            </Typography>
            <Typography variant='body1'>
                Or fill the form here
            </Typography>
        </Box>
    );
}

export default Footer;