import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function AugmentedBox({ top, left, right, bottom, sx, children }) {
    const theme = useTheme();

    return (
        <Box sx={{
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                height: 1, width: 1,
                top: top && 10,
                left: left && 10,
                right: right && 10,
                bottom: bottom && 10,
                border: `5px solid ${theme.palette.primary.main}`,
                boxShadow: 24,
                zIndex: 0
            }
        }}>
            <Box sx={{
                border: `3px solid ${theme.palette.primary.main}`,
                boxShadow: 24,
                ...sx
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default AugmentedBox;