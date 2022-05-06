import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MuiLink from '@mui/material/Link';
import { useTheme, alpha } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Material-UI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
//Custom Components
import Section from '@/components/common/Section';
import ReactIcons from '@/components/common/ReactIcons';
import Tooltip from '@/components/common/Tooltip';

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
                <Link href={data.github || data.extLink} passHref>
                    <MuiLink
                        underline='none'
                        target='_blank'
                        rel='noopener'
                    >
                        <Box sx={{
                            position: 'relative',
                            height: isSmall ? 500 : 380,
                            zIndex: 0,
                            overflow: 'hidden',
                            '&::before': {
                                content: "''",
                                position: 'absolute',
                                height: '100%',
                                width: 1,
                                zIndex: 1,
                                backgroundColor: alpha(theme.palette.primary.main, isSmall ? 0.85 : 0.5),
                                transitionDuration: `${theme.transitions.duration.standard}ms`,
                                transitionProperty: `background-color`,
                                transitionTimingFunction: 'transitions.easing.easeOut'
                            },
                            '&:hover::before': {
                                backgroundColor: alpha(theme.palette.primary.main, 0),
                            }
                        }}>
                            <Image
                                src={`/${data.thumbnail}`}
                                layout='fill'
                                objectFit='cover'
                                alt={`${data.name} Project Image`}
                            />
                        </Box>
                    </MuiLink>
                </Link>
            </Box>

            {/* Content */}
            <Box sx={{
                gridArea: configuration.content.gridArea,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
            }}>

                {/* Meta */}
                <Typography
                    variant='h6'
                    sx={{
                        color: 'primary.contrastText',
                        mt: isSmall && 1,
                    }}
                    gutterBottom
                    align={configuration.content.align}
                >
                    Featured Project
                </Typography>
                <Typography
                    variant='h4'
                    sx={{
                        color: 'primary.contrastText',
                        fontSize: isSmall && 23,
                    }}
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
                    color: 'primary.contrastText',
                }}>
                    <Typography variant='body1' align={configuration.content.align}>
                        {data.abstract}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 1
                    }}>
                        {data.github && (
                            <Link href={data.github} passHref>
                                <IconButton
                                    sx={{ fontSize: isSmall ? 35 : 40 }}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <SvgIcon fontSize='inherit'>
                                        <GitHubIcon />
                                    </SvgIcon>
                                </IconButton>
                            </Link>
                        )}
                        {data.extLink && (
                            <Link href={data.extLink} passHref>
                                <IconButton
                                    sx={{ fontSize: isSmall ? 35 : 40 }}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <SvgIcon fontSize='inherit'>
                                        <LinkIcon />
                                    </SvgIcon>
                                </IconButton>
                            </Link>
                        )}
                    </Box>
                </Box>

                {/* Tech Stack */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: configuration.content.justifyContent,
                    mt: 2,
                }}>
                    {data.techStack?.map(tech => (
                        <Tooltip
                            key={tech}
                            title={tech}
                            sx={{
                                color: 'primary.contrastText',
                                mx: 1,
                                fontSize: isSmall ? 35 : 42,
                            }}
                            componentProps={{
                                arrow: { style: { color: 'common.black' } },
                                tooltip: { style: { color: 'common.black' } }
                            }}>
                            <ReactIcons icon={tech} />
                        </Tooltip>
                    ))}
                </Box>
            </Box>

        </Box>
    );
}

function Featured(props) {
    const { children: data } = props;

    return (
        <Section id='featured' maxWidth='lg'>
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