import { createPathJoin, checkFile } from '../libs/path/index.js';
import { readFileSync } from '../app/files/index.js'
import { factoryCard } from './factory/factoryCard.js'
const parsingData = pathJSON => {
    // check path

    if (!checkFile(pathJSON)) return false

    const text = readFileSync(pathJSON);

    // true
    const arr = JSON.parse(text);
    return arr;
}

export const saveData = (pathJSON, folderSave, isRewrite) => {
    // arr=parsingData( pathJSON):array<Object> 
    const fullPathJson = createPathJoin(pathJSON);
    //console.log(fullPathJson)
    const arr = parsingData(fullPathJson);

    // break err path json
    if (!arr) { console.log(`App - break. Error path or fileName : root/${pathJSON}`); return }

    const listsCard = [];
    arr.forEach(element => {
        const item = factoryCard(element);
        listsCard.push(item);
    });


    listsCard.forEach(item => {
        console.log('-----------------------------');
        const pathSavetItem = item.getFileName();
        const dataItem = item.getView();
        console.log(pathSavetItem);
        console.log('data:');
        console.log(dataItem);
    })
    // console.log('-----------------------------');
    // console.log(listsCard[5].getFileName());
    // console.log('data:');
    // console.log(listsCard[5].getView());

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