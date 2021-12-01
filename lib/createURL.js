const path = require('path');

function createURL(basePath, text) {
    let url = '';

    if(path.parse(text).ext === '')
        url = (text).toLowerCase().replace(/[^a-zA-Z ]/g, "").replace(/\s/g, '-');
    else
        url = path.parse(text).name;

    return `${basePath}/${url}`;
}

module.exports = createURL;