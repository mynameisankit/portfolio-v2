import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import styled from '@mui/system/styled';
import { useTheme } from '@mui/material/styles';
//Material-UI Icons
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';

const LinkButton = styled(IconButton)`
    padding: 0px,
    color: inherit
`;

function ProjectCard({ children: data }) {
    const theme = useTheme();

    return (
        <Paper
            sx={{
                py: 3, px: 4,
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                display: 'flex',
                flexDirection: 'column',
                minHeight: {
                    sm: 300,
                    md: 330
                },
                transitionDuration: `300ms`,
                transitionProperty: `transform, box-shadow`,
                transitionTimingFunction: 'transitions.easing.easeOut',
                borderRadius: 0,
                minHeight: 350,
                '&:hover': {
                    transform: 'scale(1.03)',
                    userSelect: 'none'
                }
            }}
            elevation={10}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <FolderOpenOutlinedIcon fontSize='large' />
                <Box
                    sx={{
                        display: 'flex',
                        flexGrow: 2,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                    <React.Fragment>
                        {data.github_repo && (
                            <Link href={`https://github.com/mynameisankit/${data.github_repo}`}>
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
                            <Link href={data.extLink}>
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
                <Typography gutterBottom variant='h5'>{data.title}</Typography>
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

function Projects({ children: data, sx }) {
    return (
        <Section id='projects' maxWidth='lg' sx={sx}>
            <Grid container spacing={{ xs: 2 }}>
                {data.map(project => (
                    <Grid item xs={12} md={6} lg={4} key={project.title}>
                        <ProjectCard>
                            {project}
                        </ProjectCard>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Projects;