import React, { useState, useEffect, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled, ThemeProvider } from '@mui/material/styles';
//Custom Theme
import theme from '@/styles/theme/code';
//Utility Imports
import lowerCase from 'lodash/fp/lowerCase';

//TODO: If possible, then make responsive

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
    //If IE > 10
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true))
        return 'ie';
    else if (isEdge)
        return 'edge';
    else
        return browser_name = 'matrix';
}

function InlineText(props) {
    const { color, text, children } = props;

    return (
        <Typography
            variant='body1'
            sx={{ color: color ? color : 'info.main', display: 'inline' }}
        >
            {text || children}
        </Typography>
    );
}

function InvalidCommand(props) {
    return (
        <React.Fragment>
            command not found : <InlineText color='red' text={props.command || props.children} />
        </React.Fragment>
    );
};

function Terminal({ initialMessage, commands }) {
    const [output, setOutput] = useState([]);
    const [ready, setReady] = useState(false);

    //Initial Messages
    useEffect(() => {
        const text = initialMessage.concat(
            <React.Fragment>
                Type <InlineText text='"help"' /> to see available commands
            </React.Fragment>
        );

        let count = 0;
        const timerID = setInterval(() => {
            if (count >= text.length) {
                clearInterval(timerID);
                setReady(true);
            }
            else {
                setOutput(prevOutput => prevOutput.concat(text[count]));
                count++;
            }
        }, 1000);

        commands['clear'] = () => {
            setOutput([]);
            return null;
        };

        //Add some commands by default
        commands['help'] = null;
        commands['help'] = () => (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {Object.keys(commands).map(command => (
                    <React.Fragment key={command}>
                        <InlineText>{command}</InlineText>
                    </React.Fragment>
                ))}
            </Box>
        );

        //Return a function so that the timer will be stopped
        return (() => clearInterval(timerID));
    }, []);

    //Construct the Prompt
    const prompt = useRef(null);
    useEffect(() => {
        let text = 'user@';

        if (typeof window !== 'undefined')
            text += getBrowserName();
        else
            text += 'machine';

        prompt.current = text;
    }, []);

    const handleInput = (e) => {
        e.preventDefault();
        const input = e.target.value;

        //Check if the pressed key is Enter
        //and the string is non-empty with non-whitespace characters
        if (e.key === 'Enter' && input.length && input.replace(' ', '').length) {
            let output = <InvalidCommand command={input} />;

            //Check if it is a command
            const command = commands[lowerCase(input)];
            if (command) {
                if (typeof command === 'string')
                    output = command;
                else
                    output = command();
            }

            if (lowerCase(input) !== 'clear') {
                setOutput(prevOutput => prevOutput.concat(
                    <React.Fragment>
                        <Typography component='div' sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <InlineText color='info.main'>{prompt.current}:~$ </InlineText>
                            {input}
                        </Typography>
                        {output}
                    </React.Fragment>
                ));
            }

            e.target.value = '';
        }
    };

    //Scroll to the bottom of the terminal
    const outputBox = useRef(null);
    useEffect(() => {
        if (outputBox.current) {
            outputBox.current.scroll({
                top: outputBox.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [output]);

    const inputField = useRef(null);
    const handleFocus = () => {
        if (inputField.current)
            inputField.current.focus();
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    height: 400, width: 1,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    userSelect: 'none',
                    overflowY: 'scroll',
                }}
                onClick={handleFocus}
            >
                {/* Title Bar */}
                <Box sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'primary.main',
                    color: 'background.default',
                    zIndex: 1
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
                        height: 1,
                        px: 2, py: 1,
                        overflowY: 'scroll',
                        backgroundColor: 'background.default',
                        color: 'primary.main',
                        zIndex: 1
                    }}
                    ref={outputBox}
                >
                    <React.Fragment>
                        {output.map((text, idx) => (
                            <Typography key={idx} component='div'>
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
                            <Typography variant='body1' sx={{ color: 'info.main' }}>{prompt.current}:~$</Typography>
                            {/* Note - Uncontrolled Component to avoid typing logic */}
                            <InputBase
                                inputRef={inputField}
                                onKeyUp={handleInput}
                                onChange={handleInput}
                                fullWidth
                                sx={{ color: 'primary.main' }}
                                inputProps={{ style: { padding: 0 } }}
                                autoFocus
                            />
                        </Box>
                    )}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Terminal;