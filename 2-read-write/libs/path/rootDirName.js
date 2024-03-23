import path from 'path';

// __dirname for es6
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rootDirName = path.join(__dirname, '../../');