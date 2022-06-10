import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
//Utility Imports
import dayjs from 'dayjs';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';
import Link from '@/components/common/Link';

function Post({ title, subTitle, date, abstract, url, tags }) {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const ActionArea = isSmall ? React.Fragment : CardActionArea;

    const META_THRESHOLD = 350;

    const content = (
        <Card
            sx={{
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 0,
                borderRadius: 0,
                '&:hover': {
                    md: {
                        transform: `scale(1.02)`
                    }
                },
                transitionProperty: 'transform',
                transitionDuration: 'transitions.duration.standard',
                transitionTimingFunction: 'transitions.easing.easeOut',
                userSelect: 'none'
            }}
            elevation={5}>
            <ActionArea {...(!isSmall && { sx: { height: 1 } })}>
                <CardContent
                    sx={{
                        height: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}
                >

                    {/* Meta Data */}
                    <Box>
                        <Typography variant='h4'>{title}</Typography>
                        <Typography variant='subtitle1'>{subTitle}</Typography>
                        <Typography variant='subtitle1' gutterBottom>Published on {dayjs(date).format('D MMMM YYYY')}</Typography>
                        {abstract && (
                            <Typography variant='body1' sx={{ mt: 2 }} paragraph>
                                {`${abstract.substr(0, META_THRESHOLD)} ${abstract.length >= META_THRESHOLD && '...'}`}
                            </Typography>
                        )}
                        {isSmall && (
                            <Link href={url} muiLinkProps={{ variant: 'text', color: 'inherit', underline: 'none' }}>
                                Read More ...
                            </Link>
                        )}
                    </Box>

                    {/* Topics */}
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1, mt: 3
                    }}>
                        {tags.map(tag => (
                            <Chip
                                key={tag}
                                variant='outlined'
                                icon={(
                                    <SvgIcon>
                                        <ReactIcons icon={tag} />
                                    </SvgIcon>
                                )}
                                label={tag}
                                sx={{
                                    p: 1,
                                    cursor: {
                                        xs: 'auto',
                                        md: 'pointer'
                                    }
                                }}
                                color='primary'
                            />
                        ))}
                    </Box>
                </CardContent>
            </ActionArea>
        </Card>
    );

    return (
        isSmall ? content : (
            <Link href={url} muiLinkProps={{ underline: 'none' }}>
                {content}
            </Link>
        )
    );
}

export default Post;