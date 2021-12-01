import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Zoom from '@mui/material/Zoom';

function Tooltip(props) {
    const { title, sx, children, componentProps } = props;

    return (
        <MuiTooltip
            TransitionComponent={Zoom}
            disableFocusListener
            interactive
            title={title}
            placement='top'
            arrow
            componentsProps={{
                arrow: componentProps.arrow,
                tooltip: componentProps.tooltip,
            }}
        >
            <Box sx={sx}>
                {children}
            </Box>
        </MuiTooltip>
    );
}

export default Tooltip;