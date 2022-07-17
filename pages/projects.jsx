//Server Side Imports
import path from 'path';
import getJSON from '@/lib/getJSON';
import { getPlaiceholder } from 'plaiceholder';
//Client-Side Imports
import React from 'react';
import { NextSeo } from 'next-seo';
import { useTheme } from '@mui/material/styles';
//Custom Components
import Featured from '@/components/projects/Featured';
import Projects from '@/components/projects/Projects';
import Header from '@/components/common/Header';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Image
import DecorativeImageLightMode from '@/images/projects-light.webp';
import DecorativeImageDarkMode from '@/images/projects-dark.webp';

function ProjectsPage({ featured, projects }) {
    const theme = useTheme();

    return (
        <React.Fragment>
            <NextSeo
                title='Projects'
                description='My Projects'
            />

            <Header
                title='Projects'
                backgroundImage={useColorModeValue(DecorativeImageLightMode, DecorativeImageDarkMode)}
            />

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

    const featured = getJSON(path.join(CWD, 'data', 'featured'));
    
    for (const data of featured) {
        const { base64: blurDataURL, img: { src } } = await getPlaiceholder(`/${data.thumbnail}`);
        data.thumbnail = { blurDataURL, src };
    }

    return {
        props: {
            featured,
            projects: getJSON(path.join(CWD, 'data', 'projects'))
        }
    };
}

export default ProjectsPage;