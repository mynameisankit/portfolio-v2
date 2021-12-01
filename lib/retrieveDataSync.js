const path = require('path');
const fs = require('fs');

function retrieveDataSync(name, dataType) {
    let currData = null;

    try {
        const filePath = path.join('content', name);

        if (fs.lstatSync(filePath).isDirectory()) {
            currData = [];

            const directory = fs.readdirSync(filePath);

            for (let i in directory) {
                let file = directory[i];

                file = fs.openSync(path.join(filePath, file));

                let data = fs.readFileSync(file, { encoding: "utf8" });
                if (dataType === 'JSON')
                    data = JSON.parse(data);

                fs.closeSync(file);

                currData.push(data);
            }
        }
        else if (fs.lstatSync(filePath).isFile()) {
            let file = fs.openSync(filePath);
            let data = fs.readFileSync(file, { encoding: "utf8" });
            if (dataType === 'JSON')
                data = JSON.parse(data);

            fs.closeSync(file);

            currData = data;
        }
    }
    catch (e) {
        console.log(`Cannot read "${name}"`);
        console.log(e, "\n");
    }

    return currData;
}

module.exports = retrieveDataSync;