//Client-side imports
import React from 'react';
import { useRouter } from 'next/router';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
//Theme
import theme from '../styles/theme';
//Custom Components
import Head from '@/components/common/Head';
import AppBar from '@/components/common/AppBar';
import Footer from '@/components/common/Footer';
//Styles
import globalStyles from '@/styles/global';
import prismStyles from '@/styles/prism.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    const router = useRouter();

    let { pathname: currentRoute } = router;
    const URLMatcher = /^\/([-\w]*).*$/;
    //Get the top-most route
    currentRoute = URLMatcher.exec(currentRoute)[1].toLowerCase();

    return (
        <CacheProvider value={emotionCache}>
            <Head
                title="Ankit Kumar | Portfolio v2"
            />
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <React.Fragment>
                    {[globalStyles, prismStyles].map((styles, idx) => <GlobalStyles key={idx} styles={styles} />)}
                </React.Fragment>
                {currentRoute !== 'admin' && (
                    <AppBar>
                        {['projects', 'blogs']}
                    </AppBar>
                )}
                <Component {...pageProps} />
                {currentRoute !== 'admin' && (
                    <Footer />
                )}
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;