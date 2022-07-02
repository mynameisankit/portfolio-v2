//Client-side imports
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/styles/createEmotionCache';
import smoothscroll from 'smoothscroll-polyfill';
import useMediaQuery from '@mui/material/useMediaQuery';
//Utility
import getRoute from '@/lib/getRoute';
//Custom Components
import AppBar from '@/components/appbar';
import Footer from '@/components/footer';
//Styles
import globalStyles from '@/styles/global';
import 'cal-sans';
import 'katex/dist/katex.css';
//Theme
import createTheme from '@/styles/theme/createTheme';
import ColorModeContext from '@/styles/theme/ColorModeContext';
//SEO 
import SEO from 'next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
    const router = useRouter();
    const route = useRef(null);
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const handleRouteChange = () => {
        route.current = getRoute(router.pathname);
    };

    useEffect(() => {
        route.current = getRoute(router.pathname);
        smoothscroll.polyfill();

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    //Theme Switch
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => prevMode === 'light' ? 'dark' : 'light');
        }
    }), []);

    //Theme
    const theme = useMemo(() => createTheme(mode), [mode]);

    const currentRoute = route.current;
    return (
        <CacheProvider value={emotionCache}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <GlobalStyles styles={globalStyles} />
                    {currentRoute !== 'admin' && (
                        <AppBar>
                            {['about', 'projects', 'blogs']}
                        </AppBar>
                    )}
                    <DefaultSeo {...SEO} additionalMetaTags={[{
                        name: 'theme-color',
                        content: theme.palette.primary.main
                    }]} />
                    <Component {...pageProps} />
                    {/* {currentRoute !== 'admin' && <Footer />} */}
                </ThemeProvider>
            </ColorModeContext.Provider>
        </CacheProvider>
    );
}

export default App;