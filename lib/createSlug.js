import path from 'path';
import { slug } from 'github-slugger';

function createSlug(basePath, str) {
    if (path.parse(str).ext !== '')
        str = path.parse(str).name;

    str = slug(str);

    if (basePath === '#')
        return `#${str}`;
    else
        return `${basePath}/${str}`;
}

export default createSlug;