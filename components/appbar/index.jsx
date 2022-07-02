import React, { useEffect, useContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
//Theme
import ColorModeContext from '@/styles/theme/ColorModeContext';
import getDesignTokens from '@/styles/theme/getDesignTokens';
//Utility
import getRoute from '@/lib/getRoute';
import startCase from 'lodash/fp/startCase';
//Custom Components
import Link from '@/components/common/Link';
import MenuButton from '@/components/appbar/MenuButton';
import ReactIcons from '@/components/common/ReactIcons';
//Icons
import CloseIcon from '@mui/icons-material/Close';

const ModeSwitch = styled(Switch)({
    '& .MuiSwitch-thumb': {
        backgroundColor: getDesignTokens('light').palette.primary.main
    },
    '& .Mui-checked .MuiSwitch-thumb': {
        backgroundColor: getDesignTokens('dark').palette.primary.main
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: getDesignTokens('light').palette.primary.dark
    },
    '& .Mui-checked  .MuiSwitch-thumb': {
        backgroundColor: getDesignTokens('light').palette.primary.dark
    }
});

function AppBar({ children: routes }) {
    const colorMode = useContext(ColorModeContext);
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const iOS = useRef(false);
    const routeRef = useRef(null);

    const handleRouteChange = () => {
        routeRef.current = getRoute(router.pathname);

        setOpen(false);
    };

    useEffect(() => {
        routeRef.current = getRoute(router.pathname);
        iOS.current = (typeof navigator !== 'undefined') && /iPad|iPhone|iPod/.test(navigator.userAgent);

        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, []);

    if (routeRef.current === '')
        routeRef.current = 'Home';

    return (
        <React.Fragment>
            <MuiAppBar color='transparent' sx={{ boxShadow: 0, pt: [1, 0] }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <MenuButton aria-label='Menu' onClick={() => setOpen(true)}>
                        <ReactIcons icon='Menu' fontSize='large' />
                    </MenuButton>
                    <Link href='/' muiLinkProps={{ underline: 'none' }}>
                        <Typography variant='h6' component='h6'>
                            Ankit Kumar
                        </Typography>
                    </Link>
                </Toolbar>
            </MuiAppBar>
            <Toolbar sx={{ mt: 1 }} />
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
                    {/* Color Mode Switch */}
                    <Box sx={{
                        position: 'absolute',
                        left: (theme) => theme.spacing(2),
                        top: (theme) => theme.spacing(2),
                    }}>
                        <ModeSwitch onChange={() => colorMode.toggleColorMode()} />
                    </Box>

                    {/* Menu Close Button */}
                    <Box sx={{
                        position: 'absolute',
                        right: (theme) => theme.spacing(2),
                        top: (theme) => theme.spacing(2),
                    }}>
                        <MenuButton aria-label='Close Menu' onClick={() => setOpen(false)} sx={{ boxShadow: 0 }}>
                            <CloseIcon fontSize='large' />
                        </MenuButton>
                    </Box>

                    {/* Menu */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2
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
                                <Link
                                    key={url}
                                    href={url}
                                    muiLinkProps={{
                                        underline: 'none',
                                        color: routeRef.current === route ? 'primary' : 'secondary',
                                        sx: {
                                            transition: (theme) => theme.transitions.create(['color']),
                                            '&:hover': {
                                                color: 'primary.light'
                                            }
                                        }
                                    }}>
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