import path from 'path';

function createSlug(basePath, str) {
    if (path.parse(str).ext !== '')
        str = path.parse(str).name;

    if (basePath !== '#')
        str = str.toLowerCase();

    str = str.replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '-');

    if (basePath === '#')
        return `#${str}`;
    else
        return `${basePath}/${str}`;
}

export default createSlug;