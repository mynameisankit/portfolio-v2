import React from 'react';
import Link from 'next/link';
import MuiAppBar from '@mui/material/AppBar';
import MuiLink from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function AppBar(props) {
    const { children, currentRoute } = props;
    const routes = [...children];
    routes.unshift({
        'name': 'home',
        'url': '/'
    });

    return (
        <MuiAppBar position='relative' color='transparent'
            sx={{ mb: { xs: 2, sm: 0 } }}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <Link href='/' passHref>
                        <MuiLink>Home</MuiLink>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    {routes.map(route => {
                        let url, name;
                        if (route instanceof Object) {
                            url = route.url;
                            name = route.name;
                        }
                        else {
                            url = `/${route}`;
                            name = route;
                        }

                        return (
                            <Link key={url} href={url} passHref>
                                <MuiLink sx={{
                                    ...(`/${currentRoute}` === url && {
                                        color: 'red'
                                    })
                                }}>
                                    {name}
                                </MuiLink>
                            </Link>
                        );
                    })}
                </Box>
            </Toolbar>
        </MuiAppBar>
    );
}

export default AppBar;