import matter from 'gray-matter';
import kebabCase from 'lodash/fp/kebabCase';
import readingTime from 'reading-time';

function extractFrontMatter({ data: source }, preserveSource) {
    const { content: mdxSource, data: frontMatter } = matter(source);

    //Date causes problems, so converting it to ISO string
    frontMatter.date = new Date(frontMatter.date).toISOString();
    //Add URL
    frontMatter.url = kebabCase(frontMatter.title);
    //Reading Time
    frontMatter.readingTime = readingTime(mdxSource);

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