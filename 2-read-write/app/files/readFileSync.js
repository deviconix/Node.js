import fs from 'fs';

export const readFileSync = filePath => {
    const result = fs.readFileSync(filePath, { encoding: 'utf8', flag: 'r' });
    return result;
}