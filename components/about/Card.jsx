import React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiCardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
//Custom Components
import Link from '@/components/common/Link';

function Card({ media, content, url, children, sx }) {
    if (!(media || content || url))
        ({ media, content, links } = children);

    const card = (
        <MuiCard
            elevation={0}
            component={url ? MuiCardActionArea : Box}
            sx={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: ['column', 'row'],
                pt: [3, 0],
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'secondary.main',
                borderRadius: `16px 0px 16px 0px`,
                height: 1,
                transition: (theme) => theme.transitions.create(['transform']),
                '&:hover': {
                    transform: 'scale(1.02)'
                },
                ...(sx?.card)
            }}>
            <MuiCardMedia
                component={Box}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    width: 100,
                    height: 1,
                    ...(sx?.media)
                }}>
                {media}
            </MuiCardMedia>
            <MuiCardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                {content}
            </MuiCardContent>
        </MuiCard>
    );

    return (
        <React.Fragment>
            {url ? (
                <Link href={url} muiLinkProps={{ underline: 'none' }}>
                    {card}
                </Link>
            ) : card}
        </React.Fragment>
    );
}

export default Card;