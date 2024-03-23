import { fsAccess } from './fsAccess';

export const checkFile = (pathfile) => {
    return fsAccess(pathfile);
}