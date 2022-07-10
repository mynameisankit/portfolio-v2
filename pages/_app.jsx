//Client-side imports
import React, { useState, useMemo, useEffect } from 'react';
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
import Loader from '@/components/loader';
//Styles
import globalStyles from '@/styles/global';
import 'cal-sans';
import 'katex/dist/katex.css';
//PDF (Note - Workaround for now)
import '@/styles/react-pdf/TextLayer.css';
import '@/styles/react-pdf/AnnotationLayer.css';
//Theme
import createTheme from '@/styles/theme/createTheme';
import ColorModeContext from '@/styles/theme/colorModeContext';
//SEO 
import SEO from '@/next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
    const prefersDarkMode = useMediaQuery('dark');
    const router = useRouter();

    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
    const [route, setRoute] = useState('Home');

    const handleRouteChange = (url) => {
        setRoute(getRoute(url));
    };

    useEffect(() => {
        setRoute(getRoute(router.pathname));
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

    return (
        <CacheProvider value={emotionCache}>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>

                    {/* Styles */}
                    <CssBaseline />
                    <GlobalStyles styles={globalStyles} />

                    <Loader />

                    {/* Navbar */}
                    {route !== 'admin' && (
                        <AppBar
                            routes={['about', 'projects', 'blogs', 'snippets', 'resume', 'contact']}
                        />
                    )}

                    {/* SEO and Page */}
                    <DefaultSeo {...SEO} additionalMetaTags={[{
                        name: 'theme-color',
                        content: theme.palette.primary.main
                    }]} />

                    <Component {...pageProps} />

                    {route !== 'admin' && <Footer />}

                </ThemeProvider>
            </ColorModeContext.Provider>
        </CacheProvider>
    );
}

export default App;