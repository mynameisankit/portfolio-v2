import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
//Material-UI Icons
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const Pre = styled('pre')`
  text-align: left;
  padding: 0.5em;
  overflow: scroll;
  margin: 0 0 1.5em 0;
`;

const Line = styled(Box)`
  display: table-row;
`;

const LineNo = styled(Box)`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled(Box)`
  display: table-cell;
`;

const HelperBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: `0px ${theme.spacing(2)} 0px ${theme.spacing(2)}`,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '15px 15px 0px 0px',
}));

function copyText(text) {
    navigator?.clipboard.writeText(text);
    return;
}

function Code(props) {
    let { children: { props: { children: code, className: language } } } = props;

    //Remove the beginning and End spaces
    code = code.trim();
    language = language.replace(/language-/, '');

    return (
        <Box sx={{ mt: 2 }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <HelperBox>
                    <IconButton size='large' onClick={() => copyText(code)}>
                        <ContentCopyIcon />
                    </IconButton>
                </HelperBox>
                <HelperBox>
                    <Typography variant='h6' align='right'>
                        {language}
                    </Typography>
                </HelperBox>
            </Box>
            <Highlight {...defaultProps} code={code} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <Pre className={className} style={style}>
                        <React.Fragment>
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
                        </React.Fragment>
                    </Pre>
                )}
            </Highlight>
        </Box>
    );
}

export default Code;