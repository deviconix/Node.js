import { fsAccess } from './fsAccess.js';

export const checkFile = (pathfile) => {
    return fsAccess(pathfile);
}