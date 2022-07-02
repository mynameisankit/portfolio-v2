import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';

function Tooltip({ title, sx, children }) {
    return (
        <MuiTooltip
            TransitionComponent={Zoom}
            disableFocusListener
            interactive
            title={(
                <Typography variant='subtitle2' component='subtitle2'>
                    {title}
                </Typography>
            )}
            placement='top'
            arrow
            componentsProps={{
                arrow: {
                    sx: {
                        color: 'secondary.main'
                    }
                },
                tooltip: {
                    sx: {
                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText',
                        userSelect: 'none',
                        boxShadow: 24
                    }
                }
            }}>
            <Box sx={sx}>
                {children}
            </Box>
        </MuiTooltip>
    );
}

export default Tooltip;