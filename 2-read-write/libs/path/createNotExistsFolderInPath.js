import path from 'path';
import fs from 'fs';

export function createNotExistsFolderInPath(filePath) {
    /**
     * if not file.ext in path then add test.txt 
     * for get path.dir
     */

    if (!path.extname(filePath)) {
        filePath = path.join(filePath, 'test.txt');
    }

    const dirname = path.dirname(filePath);

    // console.log(filePath);
    // console.log(dirname);
    // console.log(path.parse(filePath));

    // try catch not use ?
    if (!fs.existsSync(dirname)) {
        // created not exists folder
        try {
            fs.mkdirSync(dirname, { recursive: true });
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    } else {
        return 0
    }
}