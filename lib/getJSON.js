import getFiles from '@/lib/getFiles';

function getJSON(root) {
    const DATA = getFiles(root);

    if(DATA instanceof Array)
        return DATA.map(file => file.data);
    else if(DATA instanceof Object)
        return DATA.data;
    else
        return DATA;
}

export default getJSON;