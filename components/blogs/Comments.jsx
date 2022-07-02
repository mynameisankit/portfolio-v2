import React from 'react';
import { Giscus } from '@giscus/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
//Configuration Data
import config from '/giscus.config.js';

function Comments() {
    const theme = useTheme();

    return (
        <Box id='comments' sx={{ mt: 8, maxWidth: 'lg' }}>
            <Typography variant='h3' component='h3'>Comments</Typography>
            <Giscus {...(config(theme))} />
        </Box>
    );
}

export default Comments;