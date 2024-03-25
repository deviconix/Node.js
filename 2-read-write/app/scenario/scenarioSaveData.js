//import { createNotExistsFolderInPath, createPathJoin, checkFile } from '../../libs/path/index.js';
//import { readFileSync } from '../files/index.js'

import { scenarioCreateListCards } from '../scenario/index.js'
import { emitArr } from '../../libs/emmiter/emitArr.js'

import { FileManager } from '../../libs/fileManager/FileManager.js'
// есть сценарий
export const saveData = (localPathJSON, localFolderSave, isRewrite) => {

    const lists = scenarioCreateListCards({ localPathJSON, localFolderSave });

    // commands 4
    // emit view
    const fileManager = new FileManager();
    const log = mess => { console.log('onRewrite : ' + mess) }

    fileManager.on('rewrite', log);
    fileManager.setLocalPathSave(localFolderSave);


    emitArr(lists, (elem) => {
        console.log('-----------------');
        console.log('fileName :', elem.getFileName());
        console.log(elem.getView());
        //save
        fileManager.save(elem.getFileName(), elem.getView());
    });

    //process.exit(1)


}