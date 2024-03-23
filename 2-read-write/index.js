



// main

const pathJSON = 'data/fas/afa/fasfas/index.txt';

import { checkPath } from './libs/path/index.js';
//work import { fsAccess } from './libs/path/fsAccess.js';

//const a = checkPath(pathJSON);
const a = checkPath(pathJSON);
console.log(a);

const app = new App();
app.setConfig({ dataTxt, savePath, rewrite=false });
app.makeCards();
app.viewList();
app.viewCard(id);
app.saveList();

app.saveData();

// commands
app.run({
    'gg'
});