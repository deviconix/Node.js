// import fs from 'fs';
// import path from 'path';

// for es6 __dirname
/*
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
*/
// end __dirname


const parsingData = pathJSON => {
    // check path

    // true
    const text = '[]';
    const arr = JSON.parse(text);
    // return 
}

const saveData = (pathJSON, folderSave, isRewrite) => {
    // arr=parsingData( pathJSON):array<Object> 
    const arr = parsingData(pathJSON);

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

// main

/**
 * return bool
 */


// const getAbsolutePathFromLocal = (pathJoinArr, fileName) => {
//     const result = path.join(__dirname, ...pathJoinArr, fileName);
//     console.log(result);
//     return result;
// }



const pathJSON = 'data/fas/afa/fasfas/index.txt';


// not check 
//getAbsolutePathFromLocal(['data'], '2-read-write-users.json');
console.log('01 run getAbsolutePathFromLocal()');
const outFile = getAbsolutePathFromLocal(pathJSON); // return {dir,subpath,path}

console.log('02 1 run chekPath()');
const isFileExists = chekPath(outFile);

console.log('03 check 1 =', isFileExists)

// create not exists folder



console.log('04 run createAbsolutePath()');
createAbsolutePath(outFile);

console.log('05 2 run chekPath()');
const isFileExists2 = chekPath(outFile);
console.log('06 check 2 =', isFileExists2)

const isFileExists3 = checkFile(outFile);
console.log('06 check 3 =', isFileExists3)