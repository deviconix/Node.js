import { createNotExistsFolderInPath, createPathJoin, checkFile } from '../libs/path/index.js';
import { readFileSync } from './files/index.js'
import { factoryCard } from './factory/factoryCard.js'
import { scenarioCreatePathSaveForCards } from './scenario/index.js'//scenario->command

const parsingData = pathJSON => {
    // check path

    if (!checkFile(pathJSON)) return false

    const text = readFileSync(pathJSON);

    // true
    const arr = JSON.parse(text);
    return arr;
}

// есть сценарий
export const saveData = (pathJSON, folderSave, isRewrite) => {
    // сначала получить данные из json а потом создавать папку для сохранения

    // SCENARIO 1
    const isCreateFolder = scenarioCreatePathSaveForCards(folderSave);

    // scenarioRun(name,params,'err mess');
    // checkScenario(bool,'err mess');
    if (!isCreateFolder) { return 'not create path'; }

    // вынести в отдельный сценарий
    //put it in a separate script createSavePath (global for cardsSave)
    const PATH_CARD_SAVE = createPathJoin(folderSave);
    const isFolderSave = createNotExistsFolderInPath(PATH_CARD_SAVE);


    // console.log(folderSave);
    // console.log(PATH_CARD_SAVE);
    // console.log(isFolderSave);

    //process.exit(1)
    // getData
    // getListsCards
    // saveLists
    // viewLists


    // SCENARIO 2
    //-- вынести в отдельный сцкнарий getDataFromJSONfile(path) min information
    // arr=parsingData( pathJSON):array<Object> 
    const fullPathJson = createPathJoin(pathJSON);
    //console.log(fullPathJson)
    const arr = parsingData(fullPathJson);
    //----------


    // break err path json
    if (!arr) { console.log(`App - break. Error path or fileName : root/${pathJSON}`); return }

    const listsCard = [];
    arr.forEach(element => {
        const item = factoryCard(element);
        listsCard.push(item);
    });

    //scenario view console 
    listsCard.forEach(item => {
        const pathSavetItem = item.getFileName();
        const dataItem = item.getView();

        // if view true
        console.log('-----------------------------');
        console.log(pathSavetItem);
        console.log('data:');
        console.log(dataItem);

        // save to file
    })


    /* arr.foreach(index=>{
    
    })
    */
    //cb()
    //  // getFileName(dataObj<Card>):string

    //  // getView(dataObj<Card>,templateView:string`label ${var} \n`):string

    //  // getSavePath(dataObj<Card>):path

    //  // validate(pathSave<path>):bool
    //  //  // check(path)

    //  // create SavePath(pathSave<path>):path
    //  //  // check(pathSave<path>)
    //  //  //  // if false created(folders)

    // saveFile(pathSave<path>,getFileNameValue,getViewValue) not check 
    // return foreach cb()
}