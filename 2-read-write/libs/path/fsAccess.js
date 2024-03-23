import fs from 'fs';

export const fsAccess = pathfile => {
    try {
        fs.accessSync(pathfile, fs.constants.F_OK);
        //console.log('path exists');
        return true;
    } catch (e) {
        //console.error('path exists');
        return false;
    }
}