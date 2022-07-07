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
//Hooks
import useColorModeValue from '@/hooks/useColorModeValue';

//Recursively render the items
function TableOfContentsItems({ toc }) {
    const textColor = useColorModeValue('text.secondary', 'text.primary');

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
                        <Stack direction='row' sx={{
                            mb: 1.2,
                            color: textColor
                        }}>
                            <ArrowRightIcon />
                            <Typography variant='h6' component='h6'>
                                {value}
                            </Typography>
                        </Stack>
                    </Link>
                    {children.length && <TableOfContentsItems toc={children} />}
                </Box>
            ))}
        </React.Fragment>
    );
}

function TableOfContents({ toc }) {
    const [open, setOpen] = useState(true);

    const backgroundColor = useColorModeValue('primary.main', 'secondary.main');
    const textColor = useColorModeValue('text.secondary', 'text.primary');

    if (!toc.length)
        return null;

    return (
        <Paper sx={{
            backgroundColor,
            color: textColor,
            float: { xs: 'none', md: 'right' },
            p: 1, pl: 2,
            mb: { xs: 4, md: 0 }
        }}>
            <Stack
                direction='row'
                alignItems='center'
                justifyContent='space-between'
                gap={1}
            >
                <Typography variant='h5' component='h5'>Table Of Contents</Typography>
                <IconButton sx={{ color: 'inherit' }} onClick={() => setOpen(!open)}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Stack>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <Divider
                    component='div'
                    sx={{
                        mt: 1, mb: 2,
                        borderColor: textColor
                    }}
                />
                <TableOfContentsItems toc={toc} />
            </Collapse>
        </Paper>
    );
}

export default TableOfContents;