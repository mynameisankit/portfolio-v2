import React from 'react';
import MuiCard from '@mui/material/Card';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiCardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';

function Card({ media, content, links, children }) {
    if (!(media || content || links))
        ({ media, content, links } = children);

    return (
        <MuiCard
            elevation={0}
            sx={{
                backgroundColor: 'secondary.main',
                display: 'flex',
                borderRadius: `16px 0px 16px 0px`,
                height: 1,
                transition: (theme) => theme.transitions.create(['transform']),
                '&:hover': {
                    transform: 'scale(1.02)'
                }
            }}>
            <MuiCardMedia
                component={Box}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    width: [200, 100], height: 1
                }}>
                {media}
            </MuiCardMedia>
            <Box sx={{
                flexGrow: 2,
                display: 'flex',
                justifyContent: [null, 'space-between']
            }}>
                <MuiCardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                    {content}
                </MuiCardContent>
                <MuiCardActions>
                    {links}
                </MuiCardActions>
            </Box>
        </MuiCard>
    );
}

export default Card;