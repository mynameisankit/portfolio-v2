//Client-side imports
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import smoothscroll from 'smoothscroll-polyfill';
//Theme
import theme from '../styles/theme';
//Custom Components
import AppBar from '@/components/common/AppBar';
import Footer from '@/components/common/Footer';
//Styles
import globalStyles from '@/styles/global';
import 'cal-sans';
//SEO 
import SEO from 'next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const router = useRouter();
    const route = useRef(null);

    const URLMatcher = /^\/([-\w]*).*$/;

    const handlePathChange = () => {
        let { pathname } = router;
        //Get the top-most route
        pathname = URLMatcher.exec(pathname)[1].toLowerCase();

        route.current = pathname;
    };

    useEffect(() => {
        smoothscroll.polyfill();

        router.events.on('routeChangeComplete', handlePathChange);

        return () => {
            router.events.off('routeChangeComplete', handlePathChange);
        };
    }, []);

    const currentRoute = route.current;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <React.Fragment>
                    {[globalStyles].map((styles, idx) => <GlobalStyles key={idx} styles={styles} />)}
                </React.Fragment>
                {currentRoute !== 'admin' && (
                    <AppBar>
                        {['blogs', 'projects']}
                    </AppBar>
                )}
                <DefaultSeo {...SEO} />
                <Component {...pageProps} />
                {/* {currentRoute !== 'admin' && <Footer />} */}
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;