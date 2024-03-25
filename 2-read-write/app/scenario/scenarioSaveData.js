//import { createNotExistsFolderInPath, createPathJoin, checkFile } from '../../libs/path/index.js';
//import { readFileSync } from '../files/index.js'

import { scenarioCreateListCards } from '../scenario/index.js'
import { emitArr } from '../../libs/emmiter/emitArr.js'


// есть сценарий
export const saveData = (localPathJSON, localFolderSave, isRewrite) => {

    const lists = scenarioCreateListCards({ localPathJSON, localFolderSave });

    // commands 4
    // emit view
    emitArr(lists, (elem) => {
        console.log('-----------------');
        console.log('fileName :', elem.getFileName());
        console.log(elem.getView());
    });

    //process.exit(1)
}