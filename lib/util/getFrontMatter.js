import matter from 'gray-matter';
import kebabCase from 'lodash/fp/kebabCase';

function extractFrontMatter({ data: source }, preserveSource) {
    const { content: mdxSource, data: frontMatter } = matter(source);

    //Date causes problems, so converting it to ISO string
    frontMatter.date = new Date(frontMatter.date).toISOString();
    //Add URL
    frontMatter.url = kebabCase(frontMatter.title);

    if (preserveSource)
        return { frontMatter, mdxSource };
    else
        return frontMatter;
}

function getFrontMatter(data, preserveSource = false) {
    if (data instanceof Array)
        return data.map(source => extractFrontMatter(source, preserveSource));
    else
        return extractFrontMatter(data, preserveSource);
}

export default getFrontMatter;