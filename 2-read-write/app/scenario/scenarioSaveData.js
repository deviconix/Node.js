import { createNotExistsFolderInPath, createPathJoin, checkFile } from '../../libs/path/index.js';
import { readFileSync } from '../files/index.js'
import { factoryCard } from '../factory/factoryCard.js'
import { emitArr } from '../../libs/emmiter/emitArr.js'
import { commandGetDataFromJSONfile, commandCreatePathSaveForCards, commandCreateListCards } from '../command/index.js'//scenario->command

// есть сценарий
export const saveData = (localPathJSON, localFolderSave, isRewrite) => {
    // COMMAND 1
    // get data from file
    const data = commandGetDataFromJSONfile(localPathJSON);
    // commandCheck(data,'err path');
    if (!data) { return console.log('Err path or data JSON file'); }
    // console.log(data);
    //    process.exit(1)


    // COMMAND 2
    const dataPathSave = commandCreatePathSaveForCards(localFolderSave);
    // scenarioRun({name,params,'err mess','ok mess'});
    // checkScenario(bool,'err mess');
    if (!dataPathSave) { return console.log('not create path'); }
    //+console.log(dataPathSave);


    // command 3
    // create listCards
    const lists = commandCreateListCards(data, factoryCard);
    if (!lists) { return console.log('not create lists'); }
    // console.log(lists);


    // commands 4
    // emit view
    emitArr(lists, (elem) => {
        console.log('-----------------');
        console.log('fileName :', elem.getFileName());
        console.log(elem.getView());
    });

    process.exit(1)



    // console.log(folderSave);
    // console.log(PATH_CARD_SAVE);
    // console.log(isFolderSave);

    //process.exit(1)
    // getData
    // getListsCards
    // saveLists
    // viewLists



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