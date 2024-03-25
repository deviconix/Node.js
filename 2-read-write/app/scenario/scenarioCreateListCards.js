import { commandGetDataFromJSONfile, commandCreatePathSaveForCards, commandCreateListCards } from '../command/index.js';//scenario->command
import { factoryCard } from '../factory/factoryCard.js';
import { exitScenario } from '../helper/exitScenario.js'

export const scenarioCreateListCards = (param) => {
    const { localPathJSON, localFolderSave } = param;
    // COMMAND 1
    // get data from file
    const data = commandGetDataFromJSONfile(localPathJSON);
    // commandCheck(data,'err path');
    if (!data) { console.log('Err path or data JSON file'); return } // exitErr('err log')
    // console.log(data);
    //    process.exit(1)


    // COMMAND 2
    const dataPathSave = commandCreatePathSaveForCards(localFolderSave);
    // scenarioRun({name,params,'err mess','ok mess'});
    // checkScenario(bool,'err mess');
    if (!dataPathSave) { console.log('not create path'); return }
    //+console.log(dataPathSave);


    // command 3
    // create listCards
    const lists = commandCreateListCards(data, factoryCard);
    if (!lists) { console.log('not create lists'); return }
    // console.log(lists);
    return lists
}