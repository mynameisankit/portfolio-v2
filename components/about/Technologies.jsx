import React from 'react';
import Grid from '@mui/material/Grid';
//Custom Components
import Section from '@/components/common/Section';
import Tooltip from '@/components/common/Tooltip';
import ReactIcons from '@/components/common/ReactIcons';

function Technologies({ children: data }) {
    //Optimize for phone view
    return (
        <Section
            id='tools'
            maxWidth='sm'
            gutterBottom={24}
            heading='Technologies'
            caption='This is a list of technologies that I have worked on or currently learning.'
        >
            <Grid container spacing={2}>
                {data?.map(tech => (
                    <Grid item xs={3} sm={2} key={tech} sx={{ textAlign: 'center' }}>
                        <Tooltip title={tech}>
                            <ReactIcons icon={tech} sx={{ fontSize: [40, 50] }} />
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Technologies;