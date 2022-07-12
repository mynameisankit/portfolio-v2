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
    //TODO: Optimize for phone view
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

function Journey({ children: data }) {
    return (
        <Section
            id='timeline'
            maxWidth='md'
            gutterBottom={4}
            heading='My Journey'
        >
            <Timeline position='alternate'>
                {data?.map((item, idx, arr) => <JourneyItem key={item.title} {...item} isLast={idx === arr.length - 1} />)}
            </Timeline>
        </Section>
    );
}

export default Journey;