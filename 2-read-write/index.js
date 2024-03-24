import { saveData } from './app/scenario/index.js'

// setup
const PATH_JSON_LOCAL = 'data/2-read-write-users.json';
const PATH_SAVE_LOCAL = 'data/out';
const FLAG_REWRITE = false;

// main
const scenarioSaveData = saveData(PATH_JSON_LOCAL, PATH_SAVE_LOCAL, FLAG_REWRITE);