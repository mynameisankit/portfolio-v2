import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
//Custom Components
import Section from '../../components/common/Section';

const RibbonButton = styled(Box)(props => ({
    borderRadius: '100%',
    height: 15, width: 15,
    backgroundColor: (props.variant === 'close') ? '#E06C75' : (props.variant === 'minimize' ? '#E5C07B' : '#98C379'),
}));

function getBrowserName() {
    const isIE = false || !!document.documentMode;
    const isEdge = !isIE && !!window.StyleMedia;
    
    if (navigator.userAgent.indexOf("Chrome") != -1 && !isEdge)
        return 'chrome';
    else if (navigator.userAgent.indexOf("Safari") != -1 && !isEdge)
        return 'safari';
    else if (navigator.userAgent.indexOf("Firefox") != -1)
        return 'firefox';
    //IF IE > 10
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true))
        return 'ie';
    else if (isEdge)
        return 'edge';
    else
        return browser_name = 'matrix';
}

function Intro(props) {
    const [output, setOutput] = useState([]);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const text = [
            "Launching Server...",
            "Initializing Server...",
            "Welcome!",
            "You can run the following commands",
        ];
        let count = 0;

        const timerID = setInterval(() => {
            if (count >= text.length) {
                clearInterval(timerID);
                setReady(true);
            }
            else {
                setOutput(prevOutput => prevOutput.concat([text[count]]));
                count++;
            }
        }, 1000);

        //Return a function so that the timer will be stopped
        return (() => clearInterval(timerID));
    }, []);

    const outputBox = useRef(null);

    const handleInput = (e) => {
        e.preventDefault();
        const input = e.target.value;
        //Check if the pressed key is Enter
        //and the string is non-empty with non-whitespace characters
        if (e.key === 'Enter' && input.length && input.replace(' ', '').length) {
            setOutput(prevOutput => prevOutput.concat([input]));
            e.target.value = '';
        }
    };

    if (outputBox.current)
        outputBox.current.scrollTop = outputBox.current.scrollHeight;

    let prompt = 'user@';
    if (typeof window !== 'undefined')
        prompt += getBrowserName();
    else
        prompt += 'machine';

    return (
        <Section gutterBottom id='intro'>
            <Box sx={{
                borderRadius: 1,
                height: 350,
                width: 700,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: 5
            }}>
                {/* Title Bar */}
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#ABB2BF',
                }}>
                    <Box sx={{
                        position: 'absolute',
                        display: 'flex',
                        gap: 1, px: 1,
                        justifySelf: 'flex-start'
                    }}>
                        {['maximize', 'minimize', 'close'].map(variant => (
                            <RibbonButton
                                key={variant}
                                variant={variant}
                            />
                        ))}
                    </Box>
                    <Typography variant='h6' align='center' sx={{ width: 1 }}>Terminal</Typography>
                </Box>
                {/* Std Out */}
                <Box
                    sx={{
                        backgroundColor: '#282C34',
                        height: 1,
                        px: 2, py: 1,
                        overflowY: 'scroll',
                        color: '#ABB2BF',
                        '&::-webkit-scrollbar': {
                            backgroundColor: 'transparent',
                            width: 7
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#888',
                            borderRadius: 2,
                        },
                        '&::-webkit-scrollbar-thumb:hover': { background: '#555' }
                    }}
                    ref={outputBox}
                >
                    <React.Fragment>
                        {output.map((text, idx) => (
                            <Typography key={idx} variant='body1'>
                                {text}
                            </Typography>
                        ))}
                    </React.Fragment>
                    {ready && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}>
                            <Typography>{prompt}:~$</Typography>
                            {/* Note - Uncontrolled Component to avoid typing logic */}
                            <InputBase
                                onKeyUp={handleInput}
                                onChange={handleInput}
                                fullWidth
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </Section>
    );
}

export default Intro;