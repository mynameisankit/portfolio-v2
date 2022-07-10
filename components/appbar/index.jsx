import React, { useEffect, useContext, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled, alpha, useTheme } from '@mui/material/styles';
//Theme
import ColorModeContext from '@/styles/theme/colorModeContext';
//Utility
import getRoute from '@/lib/getRoute';
import startCase from 'lodash/fp/startCase';
//Custom Components
import Link from '@/components/common/Link';
import MenuButton from '@/components/appbar/MenuButton';
import ReactIcons from '@/components/common/ReactIcons';
//Hooks
import useColorMode from '@/hooks/useColorMode';
import useColorModeValue from '../hooks/useColorModeValue';
//Icons
import CloseIcon from '@mui/icons-material/Close';

const ModeSwitch = styled(Switch)(({ theme }) => ({
    position: 'relative',
    width: 80, height: 34, padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            transform: 'translateX(46px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            }
        }
    },
    '& .MuiSwitch-thumb': {
        width: 32, height: 32,
        backgroundColor: theme.palette.primary.main,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%', height: '100%',
            left: 0, top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent('#fff',)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        }
    },
    '& .MuiSwitch-track': {
        backgroundColor: theme.palette.primary.light,
        borderRadius: 20 / 2
    }
}));

function AppBar(props) {
    const routes = props.routes || props.children;

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const router = useRouter();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);

    const iOS = useRef(false);
    const [currentRoute, setCurrentRoute] = useState('Home');

    const handleRouteChange = (url) => {
        setOpen(false);

        const curr = getRoute(url);

        setCurrentRoute(curr === '' ? 'Home' : curr);
    };

    useEffect(() => {
        handleRouteChange(router.pathname);

        iOS.current = (typeof navigator !== 'undefined') && /iPad|iPhone|iPod/.test(navigator.userAgent);

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    const RoutesList = ['Home', ...routes].map(route => {
        let url, name;

        if (route === 'Home') {
            url = '/';
            name = 'Home';
        }
        else {
            url = `/${route}`;
            name = route;
        }

        return (
            <Link
                key={url} href={url} type='link'
                muiLinkProps={{
                    underline: 'none',
                    color: currentRoute === name ?
                        'primary.main' : 'text.primary',
                    sx: {
                        transition: theme.transitions.create(['color']),
                        '&:hover': {
                            color: 'primary.light'
                        }
                    }
                }}>
                <Typography variant={isSmall ? 'h2' : 'h6'} component='h1'>
                    {startCase(name)}
                </Typography>
            </Link>
        );
    });

    const backgroundColor = theme.palette.background.default;
    const backgroundLinearGradient = useColorModeValue(
        `linear-gradient(${alpha(backgroundColor, 0.75)} 50%, rgba(0, 0, 0, 0))`,
        `linear-gradient(${backgroundColor} 0%, ${alpha(backgroundColor, 0)})`
    );

    return (
        <React.Fragment>

            <MuiAppBar color='transparent' sx={{
                boxShadow: 0,
                pt: [1, 0],
                background: backgroundLinearGradient
            }}>
                <Toolbar
                    component={Stack}
                    direction='row'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    {isSmall && (
                        <MenuButton aria-label='Menu' onClick={() => setOpen(true)}>
                            <ReactIcons icon='Menu' fontSize='large' />
                        </MenuButton>
                    )}

                    <Link href='/' muiLinkProps={{ underline: 'none' }}>
                        <Typography variant='h6' component='h6'>
                            Ankit Kumar
                        </Typography>
                    </Link>

                    {!isSmall && (
                        <Stack direction='row' gap={4}>
                            {RoutesList}
                        </Stack>
                    )}

                    {!isSmall && (
                        <ModeSwitch
                            onChange={() => colorMode.toggleColorMode()}
                            checked={useColorMode()}
                        />
                    )}

                </Toolbar>
            </MuiAppBar>
            <Toolbar />

            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                disableBackdropTransition={!iOS.current}
                disableDiscovery={iOS.current}
            >
                <Stack
                    justifyContent='center'
                    alignItems='center'
                    sx={{
                        position: 'relative',
                        backgroundColor: 'background.default',
                        width: '100vw',
                        height: '100vh'
                    }}
                >
                    <Box sx={{
                        position: 'absolute',
                        left: 6, top: 6
                    }}>
                        <ModeSwitch
                            onChange={() => colorMode.toggleColorMode()}
                            checked={useColorMode()}
                        />
                    </Box>

                    {/* Menu Close Button */}
                    <Box sx={{
                        position: 'absolute',
                        right: 6, top: 6
                    }}>
                        <MenuButton aria-label='Close Menu' onClick={() => setOpen(false)} sx={{ boxShadow: 0 }}>
                            <CloseIcon fontSize='large' />
                        </MenuButton>
                    </Box>

                    {/* Menu */}
                    <Stack alignItems='center' gap={2}>
                        {RoutesList}
                    </Stack>
                </Stack>
            </SwipeableDrawer>

        </React.Fragment>
    );
}

export default AppBar;