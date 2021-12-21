import path from 'path';
import { bundleMDX } from 'mdx-bundler';
// Remark packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkNormalizeHeadings from 'remark-normalize-headings';
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
                remarkNormalizeHeadings,
                [remarkTocHeadings, { exportRef: toc }]
            ];

            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypeSlug,
                rehypeAutolinkHeadings,
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

    return { code, toc };
}

export default serialize;