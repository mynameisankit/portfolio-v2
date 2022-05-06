//Server Side Imports
import path from 'path';
import getJSON from '@/lib/getJSON';
//Client-Side Imports
import React from 'react';
import { useTheme } from '@mui/material/styles';
//Custom Components
import Featured from '@/components/projects/Featured';
import Projects from '@/components/projects/Projects';
import Header from '@/components/common/Header';

function ProjectsPage({ featured, projects }) {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Header>Projects</Header>
            <Featured>
                {featured}
            </Featured>
            <Projects sx={{ py: theme.spacing(8) }}>
                {projects}
            </Projects>
        </React.Fragment>
    );
}

export async function getStaticProps() {
    const CWD = process.cwd();
    return {
        props: {
            featured: getJSON(path.join(CWD, 'data', 'featured')),
            projects: getJSON(path.join(CWD, 'data', 'projects'))
        }
    };
}

export default ProjectsPage;