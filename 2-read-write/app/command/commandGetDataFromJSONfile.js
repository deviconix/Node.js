import { createPathJoin, checkFile } from '../../libs/path/index.js';
import { readFileSync } from '../../libs/fileManager/readFileSync.js';




export const commandGetDataFromJSONfile = localPathJSON => {
    // create full path
    const fullPathJson = createPathJoin(localPathJSON);

    // check exists fath
    const isFullPath = checkFile(fullPathJson);

    if (!isFullPath) { return false; }

    // read file and parsing
    const dataArr = parsingData(fullPathJson);

    return dataArr;
}

// function dummy not check params
const parsingData = pathJSON => {
    // path 100% ok

    const text = readFileSync(pathJSON);

    // true
    const arr = JSON.parse(text);
    return arr;
}