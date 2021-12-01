const path = require('path');
const fs = require('fs');

function readDirSync(directoryName) {
    const files = [];

    try {
        const dirPath = path.join('content', directoryName);
        const directory = fs.readdirSync(dirPath);

        if (directory.length)
            directory.forEach(fileName => files.push(fileName));
    }
    catch (e) {
        console.log(`Cannot read the directory "${i}"`);
        console.log(e, "\n");
    }

    return files;
}

module.exports = readDirSync;