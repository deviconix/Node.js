import path from 'path';
import fs from 'fs';

export function createNotExistsFolderInPath(filePath) {
    // console.log('start createAbsolutePath()');
    // get dirname
    const dirname = path.dirname(filePath);

    if (!fs.existsSync(dirname)) {
        // created not exists folder
        try {
            fs.mkdirSync(dirname, { recursive: true });
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }
}