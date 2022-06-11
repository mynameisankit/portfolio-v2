import React from 'react';
import Grid from '@mui/material/Grid';
//Custom Components
import Section from '@/components/common/Section';
import Tooltip from '@/components/common/Tooltip';
import ReactIcons from '@/components/common/ReactIcons';

function Technologies() {
    const technologies = [
        'HTML', 'CSS', 'C', 'CPP', 'JavaScript', 'Java',
        'Python', 'Bash', 'MySQL', 'PostgreSQL', 'AWS',
        'React', 'Next.js', 'Material-UI', 'Node.js', 'Express.js',
        'Git', 'Pandas', 'NumPy', 'Firebase', 'Bootstrap', 'SQLite'
    ];

    return (
        <Section
            id='tools'
            maxWidth='sm'
            gutterBottom={4}
            heading='Technologies'
            caption='This is my list of technologies that I have worked on or currently learning.'
        >
            <Grid container spacing={2}>
                {technologies.map(tech => (
                    <Grid item md={2} key={tech} sx={{ textAlign: 'center' }}>
                        <Tooltip title={tech} componentProps={{
                            arrow: { style: { color: 'common.black' } },
                            tooltip: { style: { color: 'common.black' } }
                        }}>
                            <ReactIcons icon={tech} sx={{ fontSize: 50 }} />
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Technologies;