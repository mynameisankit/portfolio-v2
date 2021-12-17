function getTags(data) {
    const tags = new Set();

    if (data instanceof Array)
        data.forEach(file => file.tags.forEach(tag => tags.add(tag)));
    else
        data.tags.forEach(tag => tags.add(tag));

    return Array.from(tags);
}

export default getTags;