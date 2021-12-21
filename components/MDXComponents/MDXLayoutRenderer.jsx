import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import DefaultComponents from '@/components/MDXComponents/default';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

function MDXLayoutRenderer({ mdxSource, layout, toc, ...rest }) {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

    return (
        <React.Fragment>
            <Box>
                <Typography>Overview</Typography>
                <React.Fragment>
                    {toc.map(({ value, depth, url }) => (
                        <MuiLink href={url} key={value + depth}>
                            <Typography variant={'h' + depth}>
                                {value}
                            </Typography>
                        </MuiLink>
                    ))}
                </React.Fragment>
            </Box>
            <MDXLayout
                // layout={layout}
                components={DefaultComponents}
                {...rest}
            />
        </React.Fragment>
    );
};

export default MDXLayoutRenderer;