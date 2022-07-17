import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
//Custom Components
import Card from '@/components/about/Card';
import Section from '@/components/common/Section';
import ReactIcons from '@/components/common/ReactIcons';

function Tools({ children: data }) {
    return (
        <Section
            id='tools'
            maxWidth='lg'
            gutterBottom={24}
            heading='Tools'
            caption='This is my list of software tools that I use frequently. I do my best at updating it whenever a change occurs.'
        >
            <Grid container spacing={5}>
                {data?.map(({ title, description, url, use }) => (
                    <Grid item xs={12} md={6} key={title}>
                        <Card
                            url={url}
                            media={<ReactIcons sx={{ fontSize: 40 }} icon={title} />}
                            content={
                                <React.Fragment>
                                    <Stack direction='row' alignItems='center' spacing={1}>
                                        <Typography variant={'h5'} component='h5'>
                                            {title}
                                        </Typography>
                                        <Chip color='primary' label={use} size='small' />
                                    </Stack>
                                    <Typography variant={'body1'} component='p'>
                                        {description}
                                    </Typography>
                                </React.Fragment>
                            }
                            sx={{
                                card: {
                                    pl: 2, pt: 0,
                                    flexDirection: 'row',
                                }
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Tools;