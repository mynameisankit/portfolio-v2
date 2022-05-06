import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

function Header({ children: title }) {
    const theme = useTheme();

    return (
        <Box sx={{
            minHeight: {
                xs: 300,
                md: 500
            },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: `linear-gradient(90deg, ${theme.palette.background.default} 14px, transparent 1%) 50%, linear-gradient(${theme.palette.background.default} 14px, transparent 1%) 50%, ${theme.palette.secondary.main}`,
            backgroundSize: '16px 16px',
            mb: theme.spacing(4),
        }}>
            <Typography>{title}</Typography>
        </Box>
    );
}

export default Header;