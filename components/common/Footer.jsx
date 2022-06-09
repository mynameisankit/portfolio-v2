import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';
import ReactIcons from '@/components/common/ReactIcons';
//Data
import Links from '@/data/links.json';

function FlexBox({ children, sx, ...rest }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
                ...sx
            }}
            {...rest}
        >
            {children}
        </Box>
    );
}

function Footer() {
    return (
        <Section id='footer' sx={{ mt: 4, mb: 2 }} minHeight={false} maxWidth={false}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FlexBox>
                    <Typography variant='subtitle1'>Built With : </Typography>
                    {[
                        { tech: 'Next.js', url: 'https://nextjs.org/' },
                        { tech: 'Material-UI', url: 'https://mui.com/' },
                        { tech: 'MDX', url: 'https://mdxjs.com/' },
                        { tech: 'NetlifyCMS', url: 'https://www.netlifycms.org/' }
                    ].map(({ tech, url }, idx, arr) => (
                        <React.Fragment key={tech}>
                            <Link
                                href={url}
                                type='icon'
                                buttonProps={{
                                    size: 'medium'
                                }}
                            >
                                <ReactIcons icon={tech} />
                            </Link>
                            {(idx + 1 != arr.length) && <Divider orientation='vertical' flexItem />}
                        </React.Fragment>
                    ))}
                </FlexBox>
                <FlexBox>
                    {Object.entries(Links).map(([platform, platformURL], idx, arr) => (
                        <React.Fragment key={platform}>
                            <Link
                                href={platformURL}
                                type='icon'
                                buttonProps={{
                                    size: 'medium'
                                }}
                            >
                                <ReactIcons icon={platform} />
                            </Link>
                            {(idx + 1 != arr.length) && <Divider orientation='vertical' flexItem />}
                        </React.Fragment>
                    ))}
                </FlexBox>
            </Box>
        </Section>
    );
}

export default Footer;