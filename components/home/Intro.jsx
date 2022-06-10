import React from 'react';
import NxtImage from 'next/image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';

function Intro() {
    const theme = useTheme();

    return (
        <Section id='intro' maxWidth='lg' minHeight='75vh' gutterBottom={10}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        height: 300,
                        width: 300,
                        borderRadius: theme.shape.borderRadius
                    }}>
                        <NxtImage
                            src='/images/myPic.jpg'
                            layout='fill'
                            objectFit='cover'
                            alt='My Picture'
                            priority
                        />
                    </Box>
                </Grid>
                <Typography
                    component={Grid}
                    item xs={12} md={8}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                    align='center'>
                    <Typography variant='h2' gutterBottom>Hi, I'm Ankit Kumar</Typography>
                    <Typography variant='body1' sx={{
                        px: { xs: theme.spacing(2), md: 0 }
                    }}>
                        I am an undergraduate at the{' '}
                        <Link href='http://iiitg.ac.in/' muiLinkProps={{ underline: 'none' }}>
                            Indian Institute of Information Technology Guwahati
                        </Link>
                        {' '}majoring in Computer Science and Engineering. You may learn more about me by scrolling below.
                    </Typography>
                </Typography>
            </Grid>
        </Section >
    );
}

export default Intro;