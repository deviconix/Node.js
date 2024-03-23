import { createPathJoin } from '../libs/path/index.js';
import { readFileSync } from '../app/files/index.js'
const parsingData = pathJSON => {
    // check path
    const text = readFileSync(pathJSON);

    // true
    const arr = JSON.parse(text);
    return arr;
}

export const saveData = (pathJSON, folderSave, isRewrite) => {
    // arr=parsingData( pathJSON):array<Object> 
    const fullPathJson = createPathJoin(pathJSON);
    console.log(fullPathJson)
    const arr = parsingData(fullPathJson);
    console.log(arr)
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