import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '@/components/common/Section';
import ReactIcons from '@/components/common/ReactIcons';

function JourneyItem({ year, title, description, icon, isLast }) {
    return (
        <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant='h6'>
                {year}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color='primary'>
                    <ReactIcons icon={icon} />
                </TimelineDot>
                {!isLast && <TimelineConnector sx={{ bgcolor: 'primary.main' }} />}
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant='h5' component='span'>
                    {title}
                </Typography>
                {description && (<Typography>{description}</Typography>)}
            </TimelineContent>
        </TimelineItem>
    );
}

function Journey() {
    const journey = [
        {
            year: '2020',
            title: 'Became a convener @ IIITG Programming Club',
            description: 'Helped in creating IIITG Open Source Community involving many project and took a lot of sessions',
            icon: 'Laptop'
        },
        {
            year: '2020',
            title: 'Started writing articles on Web development',
            description: 'Wrote my first ever blog with the thought of giving back to the community while I learn',
            icon: 'Laptop'
        },
        {
            year: '2019',
            title: 'Joined IIIT-Guwahati as a Computer Science and Engineering Student',
            description: 'Learned a lot of things',
            icon: 'Laptop'
        },
        {
            year: '2019',
            title: 'Passed High School',
            description: 'Found gems as friends here',
            icon: 'Book'
        },
        {
            year: '2019',
            title: 'Entered High School',
            description: 'Spent most of time studying and developed discipline',
            icon: 'Book'
        }
    ];

    return (
        <Section
            id='timeline'
            maxWidth='md'
            gutterBottom={4}
            heading='My Journey'
        >
            <Timeline position='alternate'>
                {journey.map((item, idx, arr) => <JourneyItem key={item.title} {...item} isLast={idx === arr.length - 1} />)}
            </Timeline>
        </Section>
    );
}

export default Journey;