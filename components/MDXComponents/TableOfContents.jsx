import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
//Icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
//Custom Components
import Link from '@/components/common/Link';

//Recursively render the items
function TableOfContentsItems({ toc }) {
    if (!toc?.length)
        return null;

    return (
        <React.Fragment>
            {toc.map(({ value, depth, url, children }) => (
                <Box key={value + depth} sx={{ pl: depth && 3 }}>
                    <Link
                        href={url}
                        nextLinkProps={{
                            replace: true,
                            shallow: true,
                            scroll: false
                        }}
                        muiLinkProps={{ underline: 'none' }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.2 }}>
                            <ArrowRightIcon />
                            <Typography variant='h6' component='h6' sx={{ fontSize: 'inherit' }}>
                                {value}
                            </Typography>
                        </Box>
                    </Link>
                    <TableOfContentsItems toc={children} />
                </Box>
            ))}
        </React.Fragment>
    );
}

function TableOfContents({ toc }) {
    const [open, setOpen] = useState(true);

    if (!toc.length)
        return null;

    return (
        <Paper sx={{
            backgroundColor: 'secondary.main',
            float: { xs: 'none', md: 'right' },
            p: 1,
            mb: { xs: 4, md: 0 }
        }}>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                sx={{ color: 'text.primary' }}
                gap={1}
            >
                <Typography variant='h5' component='h5'>Table Of Contents</Typography>
                <IconButton sx={{ color: 'inherit' }} onClick={() => setOpen(!open)}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Stack>
            <Divider light sx={{ mt: 1, mb: 2 }} />
            <Collapse in={open} timeout='auto' unmountOnExit>
                <TableOfContentsItems toc={toc} />
            </Collapse>
        </Paper>
    );
}

export default TableOfContents;