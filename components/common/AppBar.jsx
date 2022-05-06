import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useTheme } from '@mui/material/styles';
//Utilitu
import startCase from 'lodash/fp/startCase';
//Custom Components
import Link from '@/components/common/Link';
import BgIconButton from '@/components/common/BgIconButton';
//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function AppBar({ children: routes }) {
    const theme = useTheme();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const iOS = useRef(false);

    const handleRouteChange = () => {
        setOpen(false);
    };

    useEffect(() => {
        iOS.current = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, []);

    const spacing = theme.spacing(2);

    return (
        <React.Fragment>
            <Box sx={{
                position: 'fixed',
                top: spacing,
                left: spacing,
                zIndex: theme.zIndex.drawer
            }}>
                <BgIconButton
                    aria-label='Menu'
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon fontSize='large' />
                </BgIconButton>
            </Box>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                disableBackdropTransition={!iOS.current}
                disableDiscovery={iOS.current}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    width: '100vw',
                    height: '100vh'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        right: spacing,
                        top: spacing
                    }}>
                        <BgIconButton
                            aria-label='Close Menu'
                            onClick={() => setOpen(false)}
                            sx={{ boxShadow: 0 }}
                        >
                            <CloseIcon fontSize='large' />
                        </BgIconButton>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: theme.spacing(2)
                    }}>
                        {['Home', ...routes].map(route => {
                            let url, name;

                            if (route === 'Home') {
                                url = '/';
                                name = 'Home';
                            }
                            else if (route instanceof Object) {
                                url = route.url;
                                name = route.name;
                            }
                            else {
                                url = `/${route}`;
                                name = route;
                            }

                            return (
                                <Link key={url} href={url} muiLinkProps={{ underline: 'none' }}>
                                    <Typography variant='h2'>
                                        {startCase(name)}
                                    </Typography>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default AppBar;