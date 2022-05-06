import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//Custom Components
import Section from '@/components/common/Section';
import Terminal from '@/components/misc/Terminal';
import Link from '@/components/common/Link';

function Intro() {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Section id='intro' maxWidth={false} minHeight>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 4,
                    color: 'primary.contrastText'
                }}>
                    <Typography variant='h4'>Hello There, I'm</Typography>
                    <Typography variant='h1'>Ankit Kumar</Typography>
                    <Typography variant='subtitle1'>
                        I am an undergraduate at the{' '}
                        <Link href='http://iiitg.ac.in/' link nextLinkProps={{ passHref: true }}>
                            Indian Institute of Information Technology Guwahati
                        </Link>
                        {' '}majoring in Computer Science and Engineering. You may learn more about me by scrolling below.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        {/* {Object.entries(socialMedia).map(platform => (
                            <Link
                                key={platform[0]}
                                href={platform[1]}
                                icon
                                nextLinkProps={{ passHref: true }}
                                buttonProps={{ sx: { fontSize: 40, color: 'primary.contrastText' } }}>
                                <ReactIcons icon={platform[0]} />
                            </Link>
                        ))} */}
                    </Box>
                </Grid>
                {!isSmall && (
                    <Grid item xs={12} md={6}>
                        <Terminal
                            initialMessage={[
                                "Launching Server ...",
                                "Initializing Server ...",
                                "Welcome!"
                            ]}
                            commands={{
                                "hello": "hi"
                            }}
                        />
                    </Grid>
                )}
            </Grid>
        </Section>
    );
}

export default Intro;