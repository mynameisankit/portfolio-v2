import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
//Icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
//Custom Components
import Link from '@/components/common/Link';

//Recursively render the items
function TableOfContentsItems({ toc }) {
    const theme = useTheme();

    if (!toc?.length)
        return null;

    return (
        <React.Fragment>
            {toc.map(({ value, depth, url, children }) => (
                <Box key={value + depth} sx={{ pl: theme.spacing(depth && 4) }}>
                    <Link
                        href={url}
                        nextLinkProps={{
                            replace: true,
                            shallow: true,
                            scroll: false
                        }}
                        muiLinkProps={{ underline: 'none' }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: theme.spacing(1) }}>
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
    const theme = useTheme();

    if (!toc.length)
        return null;

    return (
        <Box sx={{ float: 'right', ml: theme.spacing(2), mb: theme.spacing(2) }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h5' component='h5'>Table Of Contents</Typography>
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Box>
            {open && <Divider />}
            <Collapse in={open} timeout='auto' unmountOnExit>
                <TableOfContentsItems toc={toc} />
            </Collapse>
        </Box>
    );
}

export default TableOfContents;