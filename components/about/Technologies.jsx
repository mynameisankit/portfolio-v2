import React from 'react';
import Grid from '@mui/material/Grid';
//Custom Components
import Section from '@/components/common/Section';
import Tooltip from '@/components/common/Tooltip';
import ReactIcons from '@/components/common/ReactIcons';

function Technologies({ children: data }) {
    return (
        <Section
            id='tools'
            maxWidth='sm'
            gutterBottom={6}
            heading='Technologies'
            caption='This is a list of technologies that I have worked on or currently learning.'
        >
            <Grid container spacing={2}>
                {data?.map(tech => (
                    <Grid item md={2} key={tech} sx={{ textAlign: 'center' }}>
                        <Tooltip title={tech}>
                            <ReactIcons icon={tech} sx={{ fontSize: 50 }} />
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Technologies;