import React from 'react';
import NextImage from 'next/image';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//Material-UI Icons
import LinkIcon from '@mui/icons-material/Link';
//Custom Components
import Section from '@/components/common/Section';
import Link from '@/components/common/Link';
import Card from '@/components/about/Card';

function EducationBlock({ children: { image, name, degree, branch, duration, link } }) {
    const theme = useTheme();
    const breakpoint = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Card
            media={
                <NextImage
                    layout='fill'
                    objectFit='fill'
                    src={image}
                />
            }
            content={
                <React.Fragment>
                    <Typography variant={breakpoint ? 'h6' : 'h5'} component='h5'>
                        {name}
                    </Typography>
                    <Typography variant={breakpoint ? 'body2' : 'body1'} component='p'>
                        {degree}, {branch}
                    </Typography>
                    <Typography variant='body2' component='p'>
                        {duration}
                    </Typography>
                </React.Fragment>
            }
            links={
                <Link type='icon' href={link}>
                    <LinkIcon fontSize='large' sx={{ color: 'text.primary' }} />
                </Link>
            }
        />
    );
}

function Education() {
    const data = [
        {
            image: '/images/iiitg-logo.png',
            name: 'Indian Institute of Information Technology, Guwahati',
            degree: 'Bachelors in Technolgy (B. Tech)',
            branch: 'Computer Science and Engineering',
            duration: '2019 - 2023',
            link: 'https://www.iiitg.ac.in/'
        },
        {
            image: '/images/afs-vn.jpg',
            name: 'Air Force School Viman Nagar, Pune',
            degree: 'Higher Secondary Education',
            branch: 'Mathematics, Physics, Chemistry and C++',
            duration: '2016 - 2018',
            link: 'http://www.airforceschoolpune.ac.in/'
        }
    ];

    return (
        <Section
            id='education'
            maxWidth='lg'
            gutterBottom={8}
            heading='Education'
        >
            <Grid container spacing={5}>
                {data.map(item => (
                    <Grid key={item.name} item xs={12}>
                        <EducationBlock>{item}</EducationBlock>
                    </Grid>
                ))}
            </Grid>
        </Section>
    );
}

export default Education;