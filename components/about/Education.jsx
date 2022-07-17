import React from 'react';
import NextImage from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Custom Components
import Section from '@/components/common/Section';
import Card from '@/components/about/Card';

function EducationBlock({ children: { image, name, degree, branch, duration, url } }) {
    const theme = useTheme();
    const breakpoint = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Card
            url={url}
            media={
                <NextImage
                    layout='fill'
                    objectFit='fill'
                    src={`/${image}`}
                />
            }
            content={
                <React.Fragment>
                    <Typography variant={breakpoint ? 'h6' : 'h5'} component='h5'>
                        {name}
                    </Typography>
                    <Typography variant={breakpoint ? 'body2' : 'body1'} component='p'>
                        {degree}, {branch}
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {duration}
                    </Typography>
                </React.Fragment>
            }
            sx={{
                media: {
                    height: 100
                }
            }}
        />
    );
}

function Education({ children: data }) {
    return (
        <Section
            id='education'
            maxWidth='lg'
            gutterBottom={20}
            heading='Education'
        >
            <Grid container spacing={5}>
                {data?.map(item => (
                    <Grid key={item.name} item xs={12}>
                        <EducationBlock>{item}</EducationBlock>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Education;