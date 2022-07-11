import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

function Loader() {
    const theme = useTheme();
    const router = useRouter();
    const timerID = useRef(null);

    const [changing, setChanging] = useState(false);
    const [complete, setComplete] = useState(true);

    const handleRouteChangeStart = () => setChanging(true);
    const handleRouteChangeComplete = () => setChanging(false);

    useEffect(() => {
        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.on('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            clearTimeout(timerID.current);
        };
    }, []);

    useEffect(() => {
        clearTimeout(timerID.current);

        if (!changing)
            timerID.current = setTimeout(() => setComplete(true), 2000);
        else
            setComplete(false);
    }, [changing]);

    return (
        <Box
            component={Stack}
            justifyContent='center'
            alignItems='center'
            gap={2}
            sx={{
                position: 'fixed',
                backgroundColor: 'background.default',
                zIndex: theme.zIndex.tooltip,
                height: '100vh', width: '100vw',
                opacity: complete ? 0 : 1,
                pointerEvents: complete ? 'none' : 'auto',
                transition: theme.transitions.create(['opacity'], {
                    duration: complete ? theme.transitions.duration.standard : 0
                })
            }}>
            <CircularProgress size={60} />
            <Typography variant='h4' component='h4'>
                Loading ...
            </Typography>
        </Box>
    );
}

export default Loader;