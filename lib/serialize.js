import path from 'path';
import { bundleMDX } from 'mdx-bundler';
// Remark packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import remarkTocHeadings from '@/lib/mdx/remarkTocHeadings';
// import { remarkMdxImages } from 'remark-mdx-images';
// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypeHighlight from 'rehype-highlight';

const ROOT = process.cwd();

let ESBUILD_PATH = path.join(ROOT, 'node_modules', 'esbuild', 'esbuild.exe');
if (process.platform !== 'win32')
    ESBUILD_PATH = path.join(ROOT, 'node_modules', 'esbuild', 'bin', 'esbuild');
process.env.ESBUILD_BINARY_PATH = ESBUILD_PATH;

const COMPONENTS_DIR = path.join(ROOT, 'components', 'MDXComponents');

async function serialize(source) {
    const toc = [];

    const { code } = await bundleMDX({
        source,
        cwd: COMPONENTS_DIR,
        xdmOptions(options) {
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                //TODO: Implement TOC
                remarkGfm,
                remarkMath,
                [remarkTocHeadings, { exportRef: toc }],
                remarkBreaks
            ];

            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeSlug,
                //TODO: Convert headings to links
                [rehypeAutolinkHeadings],
                rehypeKatex,
                rehypeCitation,
                [rehypeHighlight, { ignoreMissing: true }]
            ];

            return options;
        },
        esbuildOptions: (options) => {
            options.loader = {
                ...options.loader,
                '.js': 'jsx'
            };

            return options;
        }
    });

    //De-flatten the list
    let minDepth = toc.length && toc[0].depth;
    for (let i = 1; i < toc.length; i++) {
        const curr = toc[i];
        const prev = toc[i - 1];

        if (curr.depth <= prev.depth)
            continue;

        curr.depth = (curr.depth != prev.depth + 1) ? prev.depth + 1 : curr.depth;
        minDepth = Math.min(minDepth, curr.depth);
    }

    for (let i = 0; i < toc.length; i++)
        toc[i].depth -= minDepth;

    return { code, toc };
}

export default serialize;