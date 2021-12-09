import React from 'react';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Footer(props) {
    let currentYear = '';
    if (typeof Window !== 'undefined')
        currentYear = dayjs().format('YYYY');

    return (
        <Box sx={{ py: 1 }}>
            <Typography variant='h6' align='center'>
                {currentYear} © Ankit Kumar. All Rights Reserved.
            </Typography>
        </Box>
    );
}

export default Footer;