import React from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LabeledIcon(props) {
    const { icon: Icon, children } = props;

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            gap: 1
        }}>
            <Icon
                color='primary'
                fontSize='large'
            />
            <Typography variant='h4'>
                {children}
            </Typography>
        </Box>
    );
}

export default LabeledIcon;