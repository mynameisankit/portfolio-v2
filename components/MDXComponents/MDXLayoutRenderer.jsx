import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import DefaultComponents from '@/components/MDXComponents/default';

function MDXLayoutRenderer({ mdxSource, layout, ...rest }) {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

    return (
        <MDXLayout
            // layout={layout}
            components={DefaultComponents}
            {...rest}
        />
    );
};

export default MDXLayoutRenderer;