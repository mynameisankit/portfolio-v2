//Client-side imports
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import axios from 'axios';
import { SWRConfig } from 'swr';
import smoothscroll from 'smoothscroll-polyfill';
//Theme
import theme from '../styles/theme';
//Custom Components
import AppBar from '@/components/common/AppBar';
import Footer from '@/components/common/Footer';
//Styles
import globalStyles from '@/styles/global';
import highlightJsStyles from 'highlight.js/styles/rainbow.css';
//SEO 
import SEO from 'next-seo.config';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const router = useRouter();

    let { pathname: currentRoute } = router;
    const URLMatcher = /^\/([-\w]*).*$/;
    //Get the top-most route
    currentRoute = URLMatcher.exec(currentRoute)[1].toLowerCase();

    useEffect(() => {
        smoothscroll.polyfill();
    }, []);

    return (
        <SWRConfig
            value={{
                refreshInterval: 60 * 60 * 1000,
                fetcher: (endpoint, params) => axios.get(endpoint, { params }).then(res => res.data)
            }}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline />
                    <React.Fragment>
                        {[globalStyles, highlightJsStyles].map((styles, idx) => <GlobalStyles key={idx} styles={styles} />)}
                    </React.Fragment>
                    {currentRoute !== 'admin' && (
                        <AppBar>
                            {['projects', 'blogs']}
                        </AppBar>
                    )}
                    <DefaultSeo {...SEO} />
                    <Component {...pageProps} />
                    {/* {currentRoute !== 'admin' && <Footer />} */}
                </ThemeProvider>
            </CacheProvider>
        </SWRConfig>
    );
}

export default MyApp;