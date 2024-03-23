import path from 'path';

// __dirname for es6
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * creates path with not exists folder
 * @param {String} pathJoinStr 
 * @returns String
 */
export const createPathJoin = (pathJoinStr) => {
    // use only '/'
    //console.log('start getAbsolutePathFromLocal()');

    const pathArr = pathJoinStr.split('/');

    const result = path.join(__dirname, ...pathArr);

    //console.log('end getAbsolutePathFromLocal() result=', result);
    return result;
}