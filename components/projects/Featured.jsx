import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { useTheme, alpha, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Material-UI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
//Custom Components
import Section from '@/components/common/Section';
import ReactIcons from '@/components/common/ReactIcons';
import Tooltip from '@/components/common/Tooltip';
import Link from '@/components/common/Link';
//Hooks
import useColorModeValue from '@/hooks/useColorModeValue';

const LinkButton = styled(Link)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: 40,
    [theme.breakpoints.down('sm')]: {
        fontSize: 35
    }
}));

function Project({ children: data, direction }) {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    /**
     * Direction Prop
     * --------------
     * With respect to Content
     * True -> Content on left
     * False -> Content on Right
     * */

    const isLeft = direction === 'left';

    const configuration = {
        image: {
            gridArea: isSmall ? '1/1/2/13' : isLeft ? '1/1/2/7' : '1/7/2/13',
        },
        content: {
            gridArea: isSmall ? '1/1/2/13' : isLeft ? '1/6/2/13' : '1/1/2/8',
            align: isSmall ? 'center' : isLeft ? 'right' : 'left',
            justifyContent: isSmall ? 'center' : isLeft ? 'flex-end' : 'flex-start',
        },
    };

    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: '1fr',
            gridColumnGap: 10,
            px: !isSmall && 2,
        }}>
            {/* Image Wrapper */}
            <Box sx={{ gridArea: configuration.image.gridArea }}>
                <Link muiLinkProps={{ underline: 'none' }} href={data.github || data.extLink}>
                    <Box sx={{
                        position: 'relative',
                        height: [520, 400],
                        zIndex: 0,
                        overflow: 'hidden',
                        '&::before': {
                            content: "''",
                            position: 'absolute',
                            height: 1, width: 1,
                            zIndex: 1,
                            backgroundColor: alpha(
                                theme.palette.primary.main,
                                isSmall ?
                                    0.85
                                    : useColorModeValue(0.2, 0.5)
                            ),
                            transition: theme.transitions.create(['background-color']),
                            backdropFilter: ['blur(2px)', null, 'none']
                        },
                        '&:hover::before': {
                            backgroundColor: alpha(theme.palette.primary.main, 0)
                        }
                    }}>
                        <Image
                            src={`/${data.thumbnail}`}
                            layout='fill'
                            objectFit='cover'
                            alt={`${data.name} Project Image`}
                            priority
                        />
                    </Box>
                </Link>
            </Box>

            {/* Content */}
            <Stack
                justifyContent='center'
                sx={{
                    gridArea: configuration.content.gridArea,
                    position: 'relative',
                    zIndex: 1
                }}>

                {/* Meta */}
                <Typography
                    variant='h6'
                    sx={{ mt: isSmall && 1, color: isSmall ? 'text.secondary' : 'text.primary' }}
                    gutterBottom
                    align={configuration.content.align}
                >
                    Featured Project
                </Typography>

                <Typography
                    variant='h4'
                    sx={{ fontSize: isSmall && 23, color: isSmall ? 'text.secondary' : 'text.primary' }}
                    align={configuration.content.align}
                    gutterBottom
                >
                    {data.title}
                </Typography>

                {/* Description */}
                <Box sx={{
                    px: 3, pt: 3, pb: 2,
                    ...(!isSmall && {
                        backgroundColor: 'primary.main',
                        boxShadow: 24
                    }),
                    color: 'primary.contrastText'
                }}>
                    <Typography variant='body1' align={configuration.content.align}>
                        {data.abstract}
                    </Typography>
                    <Stack direction='row' justifyContent='center' sx={{ mt: 1 }}>
                        {data.github && (
                            <LinkButton type='icon' href={data.github}>
                                <GitHubIcon fontSize='large' />
                            </LinkButton>
                        )}
                        {data.extLink && (
                            <LinkButton type='icon' href={data.extLink}>
                                <LinkIcon fontSize='large' />
                            </LinkButton>
                        )}
                    </Stack>
                </Box>

                {/* Tech Stack */}
                <Stack
                    direction='row'
                    justifyContent={configuration.content.justifyContent}
                    sx={{ mt: 2, color: isSmall ? 'text.secondary' : 'text.primary' }}
                >
                    {data.techStack?.map(tech => (
                        <Tooltip key={tech} title={tech} sx={{ mx: 1 }}>
                            <ReactIcons sx={{ fontSize: [32, null, 40] }} icon={tech} />
                        </Tooltip>
                    ))}
                </Stack>
            </Stack>

        </Box>
    );
}

function Featured({ children: data }) {
    return (
        <Section
            id='featured'
            maxWidth='lg'
            gutterBottom={8}
        >
            <Grid container spacing={5}>
                {data?.map((project, idx) => (
                    <Grid item key={project.title} xs={12}>
                        <Project direction={(idx % 2) ? 'left' : 'right'}>
                            {project}
                        </Project>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Featured;