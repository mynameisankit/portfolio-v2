import React from 'react';
import IconButton from '@mui/material/IconButton';

function MenuButton({ children, sx, ...rest }) {
    return (
        <IconButton
            sx={{
                borderRadius: '100%',
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                    backgroundColor: 'primary.main'
                },
                ...sx
            }}
            {...rest}
        >
            {children}
        </IconButton>
    );
}

export default MenuButton;