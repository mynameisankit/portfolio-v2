import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/system/styled';
import { useTheme } from '@mui/material/styles';
//Material-UI Icons
import FolderIcon from '@mui/icons-material/Folder';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
//Colors
import { blue } from '@mui/material/colors';
//Custom Components
import Section from '../common/Section';

const LinkButton = styled(IconButton)`
    padding: 0px,
    color: inherit
`;

function ProjectCard(props) {
    const { children: data } = props;
    const theme = useTheme();

    return (
        <Paper
            sx={{
                py: 3, px: 4,
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 330,
                transitionDuration: `300ms`,
                transitionProperty: `transform, box-shadow`,
                transitionTimingFunction: 'transitions.easing.easeOut',
                '&:hover': {
                    transform: `scale(1.05)`,
                    boxShadow: 24,
                },
            }}
            elevation={10}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Box sx={{
                    fontSize: 40,
                    display: 'flex',
                    alignItems: 'center',
                    color: blue[300],
                }}>
                    <FolderIcon fontSize='inherit' />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 2,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <React.Fragment>
                        {data.github && (
                            <Link href={data.github} passHref>
                                <LinkButton
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GitHubIcon fontSize='large' />
                                </LinkButton>
                            </Link>
                        )}
                    </React.Fragment>
                    <React.Fragment>
                        {data.extLink && (
                            <Link href={data.extLink} passHref>
                                <LinkButton
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <LinkIcon fontSize='large' />
                                </LinkButton>
                            </Link>
                        )}
                    </React.Fragment>
                </Box>
            </Box>
            <Box sx={{
                pt: 2,
                '&:last-child': {
                    paddingBottom: 0,
                },
                flexGrow: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}>
                <Typography gutterBottom variant='h4'>{data.title}</Typography>
                <Typography align='justify' variant='body1' gutterBottom>{data.abstract}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: `0px ${theme.spacing(2)}`,
                flexDirection: 'row',
                marginTop: 'auto',
                mt: { xs: 4, sm: 0 },
                justifySelf: 'flex-end'
            }}>
                {
                    data.techStack.map(tech => (
                        <Typography variant='subtitle1' key={tech}>
                            {tech}
                        </Typography>
                    ))
                }
            </Box>
        </Paper>
    );
}

function Projects(props) {
    const { children: data } = props;

    return (
        <Section id='projects' gutterBottom>
            <Grid container spacing={{ xs: 2, sm: 4 }}>
                <React.Fragment>
                    {data.map(project => (
                        <Grid item xs={12} md={6} lg={4} key={project.title}>
                            <ProjectCard>
                                {project}
                            </ProjectCard>
                        </Grid>
                    ))}
                </React.Fragment>
                <Grid item xs={12} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Link href='/projects' passHref>
                        <Button
                            variant='contained'
                            color='secondary'
                            size='large'
                            sx={{ mt: 2 }}
                        >
                            See More
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Section>
    );
}

export default Projects;