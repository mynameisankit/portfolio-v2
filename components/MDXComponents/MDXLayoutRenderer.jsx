import React, { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import DefaultComponents from '@/components/MDXComponents/default';
//Custom Components
import TableOfContents from '@/components/MDXComponents/TableOfContents';

function MDXLayoutRenderer({ mdxSource, layout, toc, frontMatter, ...rest }) {
    const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource]);

    return (
        <React.Fragment>
            {/* Table Of Contents */}
            <TableOfContents toc={toc} />
            
            {/* Body */}
            <MDXLayout components={DefaultComponents} {...rest} />
        </React.Fragment>
    );
};

export default MDXLayoutRenderer;