import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

function Tooltip({ title, sx, children,
    componentProps: {
        arrow: { arrowSx, ...arrowRest },
        tooltip: { tooltipSx, ...tooltipRest }
    }
}) {
    return (
        <MuiTooltip
            TransitionComponent={Zoom}
            disableFocusListener
            interactive
            title={title}
            placement='top'
            arrow
            componentsProps={{
                arrow: {
                    sx: {
                        color: 'secondary.main',
                        ...arrowSx
                    },
                    ...arrowRest
                },
                tooltip: {
                    sx: {
                        backgroundColor: 'secondary.main',
                        userSelect: 'none',
                        border: 1,
                        ...tooltipSx
                    },
                    ...tooltipRest
                },
            }}
        >
            <Box sx={sx}>
                {children}
            </Box>
        </MuiTooltip>
    );
}

export default Tooltip;