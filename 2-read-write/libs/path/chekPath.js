import path from 'path';
import { fsAccess } from './fsAccess';

export const chekPath = (pathfile) => {
    // get base
    const pathfolders = path.dirname(pathfile);
    //console.log('template=', pathfolders);
    const result = fsAccess(pathfolders);

    return result;
}