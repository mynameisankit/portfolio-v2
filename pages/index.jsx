//Client-Side Imports
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
//Custom Components
import Section from '@/components/common/Section';
import Intro from '@/components/home/Intro';
import Terminal from '@/components/misc/Terminal';
import Contact from '@/components/home/Contact';

function Home() {
    const theme = useTheme();
    const isBig = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <React.Fragment>
            <Intro />
            {isBig && (
                <Section minHeight='70vh' maxWidth='lg' gutterBottom={5}>
                    <Terminal
                        height='70vh'
                        width={1}
                        initialMessage={[
                            "Launching Server ...",
                            "Initializing Server ...",
                            "Welcome!"
                        ]}
                        commandsList={{
                            "hello": "hi",
                            "hi": "hello"
                        }}
                    />
                </Section>
            )}
            <Contact />
        </React.Fragment>
    )
}

export default Home;