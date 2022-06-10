import { visit } from 'unist-util-visit';
import createSlug from '@/lib/createSlug';
import { toString } from 'mdast-util-to-string';

function remarkTocHeadings(options) {
    return (tree) =>
        visit(tree, 'heading', node => {
            const textContent = toString(node);

            options.exportRef.push({
                value: textContent,
                url: createSlug('#', textContent),
                depth: node.depth
            });
        });
}

export default remarkTocHeadings;