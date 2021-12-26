import React, { useState, useEffect } from 'react';
import { Giscus } from '@giscus/react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//Configuration Data
import config from '/giscus.config.js';

function Comments() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);

    return (
        <Box id='comments' sx={{
            mt: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            maxWidth: 'lg',
            mx: 'auto'
        }}>
            {loaded && (
                <React.Fragment>
                    <Typography variant='h4' component='h4'>Comments</Typography>
                    <Giscus
                        repo={config.repo}
                        repoId={config.repoId}
                        category={config.category}
                        categoryId={config.categoryId}
                        mapping={config.mapping}
                        reactionsEnabled={config.reactionsEnabled}
                        emitMetadata={config.emitMetadata}
                        theme={config.theme}
                    />
                </React.Fragment>
            )}
        </Box>
    );
}

export default Comments;