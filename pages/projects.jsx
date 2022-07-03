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
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Image
import DecorativeImageLightMode from '@/images/projects-light.png';
import DecorativeImageDarkMode from '@/images/projects-dark.png';

function ProjectsPage({ featured, projects }) {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Header backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}>
                Projects
            </Header>
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