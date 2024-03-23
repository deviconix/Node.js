import { saveData } from './app/app.js'

// setup
const pathJSONLocal = 'data/2-read-write-users.json';
const pathSaveLocal = 'data/out';
const rewrite = false;

// main
const app = saveData(pathJSON, pathSaveLocal, rewrite);