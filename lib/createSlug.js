import path from 'path';

function createSlug(basePath, str) {
    let url = '';

    if (path.parse(str).ext === '')
        url = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '-');
    else
        url = path.parse(str).name;

    return `${basePath}/${url}`;
}

export default createSlug;