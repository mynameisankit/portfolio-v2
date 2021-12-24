import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiListItemText from '@mui/material/ListItemText';
import MuiListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
//Icons
import FastForwardSharpIcon from '@mui/icons-material/FastForwardSharp';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
//Custom Components
import Link from '@/components/common/Link';

const ListItemText = styled(MuiListItemText)((({ theme }) => ({
    fontSize: theme.typography.pxToRem(20),
    userSelect: 'none'
})));

const ListItemIcon = styled(MuiListItemIcon)((({ theme }) => ({
    minWidth: 40
})));

function TableOfContents({ toc }) {
    const [open, setOpen] = useState(true);

    if (!toc.length)
        return null;

    return (
        <Paper>
            <List dense>
                <ListItem onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={{
                            sx: {
                                fontSize: 'inherit',
                                fontWeight: 'fontWeightBold'
                            }
                        }}
                        primary='Table Of Contents'
                    />
                </ListItem>
                {open && <Divider />}
                <Collapse in={open} timeout='auto' unmountOnExit>
                    {toc.map(({ value, depth, url }) => (
                        <ListItem key={value + depth} sx={{ ml: depth * 2 }}>
                            <ListItemIcon>
                                <FastForwardSharpIcon />
                            </ListItemIcon>
                            <Link
                                nextLinkProps={{
                                    replace: true,
                                    passHref: true,
                                    href: url,
                                    shallow: true,
                                    scroll: false
                                }}
                                muiLinkProps={{
                                    underline: 'none',
                                    onClick: (() => document.querySelector(url).scrollIntoView({ behavior: 'smooth' }))
                                }}>
                                <ListItemText
                                    primaryTypographyProps={{ sx: { fontSize: 'inherit' } }}
                                    primary={value}
                                />
                            </Link>
                        </ListItem>
                    ))}
                </Collapse>
            </List>
        </Paper >
    );
}

export default TableOfContents;