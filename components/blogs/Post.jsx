import React from 'react';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import useMediaQuery from '@mui/material/useMediaQuery';
//Utility Imports
import dayjs from 'dayjs';
//Custom Components
import ReactIcons from '@/components/common/ReactIcons';

function Post({ children: { title, subTitle, date, abstract, url, tags } }) {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const ActionArea = isSmall ? React.Fragment : CardActionArea;

    const content = (
        <Card
            sx={{
                backgroundColor: 'transparent',
                color: 'primary.contrastText',
                border: 1,
                borderColor: 'primary.main',
            }}
            elevation={5}
        >
            <ActionArea>
                <CardContent>
                    <Typography variant='h4'>{title}</Typography>
                    <Divider light />
                    <Typography variant='subtitle1'>{subTitle}</Typography>
                    <Typography variant='subtitle1' gutterBottom>Published on {dayjs(date).format('D MMMM YYYY')}</Typography>
                    {abstract && (
                        <Typography variant='body1' sx={{ mt: 2 }} paragraph>
                            {`${abstract.substr(0, 200)} ${abstract.length > 200 && '...'}`}
                        </Typography>
                    )}
                    {isSmall && (
                        <Link href={url} passHref>
                            <MuiLink variant='button' color='inherit'>Read More</MuiLink>
                        </Link>
                    )}
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        mt: 3
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
                                sx={{ py: 2, px: 1 }}
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
            <Link href={url}>
                {content}
            </Link>
        )
    );
}

export default Post;