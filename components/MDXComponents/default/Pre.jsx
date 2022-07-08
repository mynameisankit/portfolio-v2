import React, { useState, useRef } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
//Hooks
import useColorModeValue from '@/components/hooks/useColorModeValue';
//Material-UI Icons
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
//Colors
import { green } from '@mui/material/colors';
//Highlighting Theme
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import dracula from 'prism-react-renderer/themes/dracula';

const Pre = styled('pre')(({ theme }) => ({
    textAlign: 'left',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        overflowX: 'scroll'
    },
    marginTop: 0
}));

const Line = styled('div')({
    display: 'table-row'
});

const LineNo = styled('span')(({ theme }) => ({
    display: 'table-cell',
    textAlign: 'right',
    paddingRight: theme.spacing(1),
    userSelect: 'none',
    opacity: '0.5'
}));

const LineContent = styled('span')({
    display: 'table-cell'
});

function HighlightedCode({ children: { className: language, children: code } }) {
    language = (language.split('-')[1]);
    if (language.includes(':'))
        language = language.split(':')[0];

    code = code.trim();

    const highlightTheme = useColorModeValue(nightOwl, dracula);
    return (
        <Highlight {...defaultProps} theme={highlightTheme} code={code} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, i) => (
                        <Line key={i} {...getLineProps({ line, key: i })}>
                            <LineNo>{i + 1}</LineNo>
                            <LineContent>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </LineContent>
                        </Line>
                    ))}
                </Pre>
            )}
        </Highlight>
    );
}

function CodeBlock({ children }) {
    const CodeBlock = useRef(null);
    const timerID = useRef(null);
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    let code = null;
    if (typeof children === 'string')
        code = { className: 'language-plaintext', children };
    else
        code = children.props;

    const language = code.className;
    let filename = null;
    if (language.includes(':'))
        filename = language.substr(language.indexOf(':') + 1);

    const highlightTheme = useColorModeValue(nightOwl, dracula);
    return (
        <Box
            ref={CodeBlock}
            sx={{ position: 'relative', my: 3 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                setCopied(false);

                if (timerID.current) {
                    clearTimeout(timerID.current);
                    timerID.current = null;
                }
            }}>

            {/* Copy Button */}
            {hovered && (
                <Box
                    onClick={() => {
                        setCopied(true);

                        const allLines = Array.from(CodeBlock.current.querySelectorAll('div > span'));
                        const textContent = allLines.reduce((prev, curr, idx) => `${prev} ${idx % 2 ? `${curr.textContent}\n` : ""}`, "");

                        navigator.clipboard.writeText(textContent);

                        if (timerID.current) {
                            clearTimeout(timerID.current);
                            timerID.current = null;
                        }

                        timerID.current = setTimeout(() => {
                            setCopied(false);
                            timerID.current = null;
                        }, 2000);
                    }}
                    sx={{
                        position: 'absolute',
                        right: 0, top: 0,
                        mr: 1, mt: 5
                    }}>
                    <IconButton
                        size='large'
                        sx={copied ? { color: green[500] } : { color: 'white' }}>
                        {copied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
                    </IconButton>
                </Box>
            )}

            {/* Filename */}
            {filename && (
                <Box sx={{
                    backgroundColor: highlightTheme.plain.backgroundColor,
                    color: highlightTheme.plain.color,
                    pl: 2, py: 1
                }}>
                    <Typography component='h6' variant='h6'>
                        {filename}
                    </Typography>
                </Box>
            )}

            {/* Code */}
            <HighlightedCode>{code}</HighlightedCode>

        </Box>
    );
}

export default CodeBlock;