import path from 'path';
import fs from 'fs';

/**
 * Recursively reads all the files inside the root directory
 * and returns the content of those files with their extensions and name
 * @param {string} the root directory
 * @returns {Array} 
 * the data array with objects consiting of the following attributes:-
 * 1. file type
 * 2. data
 * 3. file path
 * 4. file name
 */
function getFiles(root) {
    //TODO: If the file isn't detected, the try wildcard match
    if (!root || !fs.existsSync(root))
        return [];

    //Check if the file at curr path is a directory
    const meta = fs.lstatSync(root);
    const is_dir = meta.isDirectory();

    if (!is_dir) {
        const { name, ext: type } = path.parse(root);

        let data = fs.readFileSync(root, { encoding: "utf8" });
        if (type.substring(1) === 'json')
            data = JSON.parse(data);

        return ({
            name, type: type.substring(1),
            path: root, data
        });
    }

    const children = fs.readdirSync(root);
    
    const data = [];
    for (let i in children) {
        const curr = children[i];
        const childPath = path.join(root, curr);

        const meta = fs.lstatSync(childPath);
        const is_dir = meta.isDirectory();

        if (!is_dir || (is_dir && limit - 1 > 0))
            data.push(getFiles(childPath));
    }

    return data;
}

export default getFiles;