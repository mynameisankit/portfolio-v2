import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';
import Card from '@/components/about/Card';
import ReactIcons from '@/components/common/ReactIcons';

function JourneyItem({ title, description, icon }) {
    //TODO: Optimize for phone view
    return (
        <Card
            media={<ReactIcons sx={{ fontSize: 40 }} icon={icon} />}
            content={
                <React.Fragment>
                    <Typography variant={'h5'} component='h5'>
                        {title}
                    </Typography>
                    <Typography variant={'body1'} component='p'>
                        {description}
                    </Typography>
                </React.Fragment>
            }
        />
    );
}

function Journey({ children: data }) {
    data?.sort((a, b) => {
        return b.year - a.year;
    });

    return (
        <Section
            id='timeline'
            maxWidth='md'
            gutterBottom={4}
            heading='My Journey'
        >
            <Grid container spacing={3}>
                {data?.reduce((acc, curr, idx, arr) => {
                    const prev = idx ? arr[idx - 1] : {};

                    if (!idx || curr.year !== prev.year)
                        acc.push(
                            <Grid key={idx} item xs={12}>
                                <Typography variant='h5' sx={{ textDecoration: 'underline' }}>
                                    {curr.year}
                                </Typography>
                            </Grid>
                        );

                    acc.push(
                        <Grid item xs={12} key={curr.title}>
                            <JourneyItem {...curr} />
                        </Grid>
                    );

                    return acc;
                }, [])}
            </Grid>
        </Section>
    );
}

export default Journey;