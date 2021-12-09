import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Pre = styled('pre')`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
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

function Code(props) {
    let { children: { props: { children: code, className: language } } } = props;

    //Remove the beginning and End spaces
    code = code.trim();
    language = language.replace(/language-/, '');

    return (
        <Box>
            <Typography>{language}</Typography>
            <Highlight {...defaultProps} code={code} language={language}>
                {
                    ({ className, style, tokens, getLineProps, getTokenProps }) => (
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
                    )
                }
            </Highlight>
        </Box>
    );
}

export default Code;