//import { createNotExistsFolderInPath, createPathJoin, checkFile } from '../../libs/path/index.js';
//import { readFileSync } from '../files/index.js'

import { scenarioCreateListCards } from '../scenario/index.js';
import { emitArr } from '../../libs/emmiter/emitArr.js';

import { FileManager } from '../../libs/fileManager/FileManager.js';
import { Log } from '../../libs/log/log.js'
// есть сценарий

const fileManager = new FileManager();
// const log = mess => { console.log('onRewrite : ' + mess) }
const log = new Log();

export const saveData = (localPathJSON, localFolderSave, isRewrite) => {
    //config

    const emmitName = 'rewrite';
    fileManager.setLocalPathSave(localFolderSave);
    fileManager.setFlagRewrite(isRewrite);
    fileManager.on(emmitName, mess => log.add(mess));

    // create List Cards
    const lists = scenarioCreateListCards({ localPathJSON, localFolderSave });

    // commands 4
    // emit view


    // err потеря this 
    //fileManager.on('rewrite',log.add);
    //fileManager.on('rewrite',log.add.bind(log));



    // save cards in file
    emitArr(lists, (elem) => {
        // view
        // console.log('-----------------');
        // console.log('fileName :', elem.getFileName());
        // console.log(elem.getView());
        //save
        fileManager.save(elem.getFileName(), elem.getView());
    });

    //process.exit(1)

    log.view();
}