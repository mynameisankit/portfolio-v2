import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';
import ReactIcons from '@/components/common/ReactIcons';
//Data
import Links from '@/data/links.json';

function Footer() {
    return (
        <Section id='footer' minHeight={false} maxWidth={false}>
            <Box sx={{
                mt: 6, mb: 1,
                display: 'flex',
                flexDirection: ['column-reverse', null, 'row'],
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>

                {/* Tech Stack */}
                <Stack direction='row' alignItems='center'>
                    <Typography variant='h6'>Built Using</Typography>
                    {[
                        { tech: 'Next.js', url: 'https://nextjs.org/' },
                        { tech: 'Material-UI', url: 'https://mui.com/' },
                        { tech: 'MDX', url: 'https://mdxjs.com/' },
                        { tech: 'NetlifyCMS', url: 'https://www.netlifycms.org/' }
                    ].map(({ tech, url }) => (
                        <Link key={tech} href={url} type='icon' buttonProps={{ size: 'large' }} >
                            <ReactIcons icon={tech} />
                        </Link>
                    ))}
                </Stack>

                {/* Social Media URLs */}
                <Stack direction='row'>
                    {Object.entries(Links).map(([platform, platformURL]) => (
                        <Link key={platform} href={platformURL} type='icon' buttonProps={{ size: 'large' }} >
                            <ReactIcons icon={platform} />
                        </Link>
                    ))}
                </Stack>

            </Box>
        </Section>
    );
}

export default Footer;