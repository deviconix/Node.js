import path from 'path';
import fs from 'fs';

export function createNotExistsFolderInPath(filePath) {
    // console.log('start createAbsolutePath()');
    // get dirname
    const dirname = path.dirname(filePath);

    if (!fs.existsSync(dirname)) {
        // created not exists folder
        fs.mkdirSync(dirname, { recursive: true });
    }
}