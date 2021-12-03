import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//Custom Components
import Section from '../../components/common/Section';
import Terminal from '../../components/common/Terminal';

function Intro(props) {
    return (
        <Section id='intro'>
            <Box>
                <Terminal
                    initialMessage={[
                        "Launching Server ...",
                        "Initializing Server ...",
                        "Welcome!"
                    ]}
                    commands={{
                        "hello": "hi"
                    }}
                />
            </Box>
        </Section>
    );
}

export default Intro;