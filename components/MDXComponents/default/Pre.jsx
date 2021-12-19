import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from '@mui/material/colors';

function Pre({ children, ...rest }) {
    const CodeBlock = useRef(null);
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);

    let timerID = null;
    return (
        <Box
            ref={CodeBlock}
            sx={{ position: 'relative' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false)
                setCopied(false);
                if (timerID) {
                    clearTimeout(timerID);
                    timerID = null;
                }
            }}
        >
            {hovered && (
                <Box
                    onClick={() => {
                        setCopied(true);
                        navigator.clipboard.writeText(CodeBlock.current.textContent);

                        if (timerID) {
                            clearTimeout(timerID);
                            timerID = null;
                        }

                        timerID = setTimeout(() => {
                            setCopied(false);
                            timerID = null;
                        }, 2000);
                    }}
                    sx={{
                        position: 'absolute',
                        right: 0, top: 0,
                        mr: 1, mt: 1,
                    }}>
                    <IconButton
                        size='large'
                        sx={copied ? { color: green[500] } : { color: 'white' }}>
                        {copied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
                    </IconButton>
                </Box>
            )
            }
            <pre {...rest}>{children}</pre>
        </Box >
    );
}

export default Pre;