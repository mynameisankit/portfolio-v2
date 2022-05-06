import React from 'react';
import IconButton from '@mui/material/IconButton';

function BgIconButton({ children, sx, ...rest }) {
    return (
        <IconButton
            sx={{
                borderRadius: '100%',
                backgroundColor: 'primary.main',
                color: 'text.primary',
                '&:hover': {
                    backgroundColor: 'primary.main'
                },
                boxShadow: 24,
                ...sx
            }}
            {...rest}
        >
            {children}
        </IconButton>
    );
}

export default BgIconButton;