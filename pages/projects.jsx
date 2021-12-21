//Server Side Imports
import path from 'path';
import getJSON from '@/lib/getJSON';
//Client-Side Imports
import React from 'react';
import useSWR, { useSWRConfig } from 'swr';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';

function Projects({ projects }) {
    const { fetcher } = useSWRConfig();

    //TODO: Think of some other way to mitigate this issue
    projects.forEach(project => {
        const { github_repo } = project;
        const { data, error } = useSWR(['/api/github/getStat', { repo_name: github_repo }], fetcher);
        project.github_stats = error ? { stargazers: 0, watchers: 0, forks: 0 } : data;
    });

    return (
        <Section id='projects' maxWidth='lg'>
            <Typography variant='h1' component='h1'>
                Projects
            </Typography>
            <Typography variant='h4' component='h4'>
                A collection of all the things I've built
            </Typography>
            <React.Fragment>
                {projects.map(({ title, abstract, techStack, extLink, github_repo, duration, stats }) => (
                    <Typography key={title}>
                        {title}
                    </Typography>
                ))}
            </React.Fragment>
        </Section>
    );
}

export async function getStaticProps() {
    const CWD = process.cwd();
    return { props: { projects: getJSON(path.join(CWD, 'data', 'projects')) } };
}

export default Projects;