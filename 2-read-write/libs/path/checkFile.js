import { fsAccess } from './fsAccess.js';

/**
 * 
 * @param {path} pathfile 
 * @returns bools
 */
export const checkFile = (pathfile) => {
    return fsAccess(pathfile);
}