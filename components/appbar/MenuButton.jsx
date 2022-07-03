import React from 'react';
import IconButton from '@mui/material/IconButton';
//Hooks
import useColorModeValue from '@/hooks/useColorModeValue';

function MenuButton({ children, sx, ...rest }) {
    return (
        <IconButton
            sx={{
                borderRadius: '100%',
                backgroundColor: 'primary.main',
                color: useColorModeValue('primary.contrastText', 'text.primary'),
                '&:hover': {
                    backgroundColor: 'primary.main'
                },
                ...sx
            }}
            {...rest}>
            {children}
        </IconButton>
    );
}

export default MenuButton;