import { commandGetDataFromJSONfile, commandCreatePathSaveForCards, commandCreateListCards } from '../command/index.js';//scenario->command
import { factoryCard } from '../factory/factoryCard.js';
import { checkResultScenario } from '../helper/checkResultScenario.js'

export const scenarioCreateListCards = (param) => {

    const { localPathJSON, localFolderSave } = param;

    // COMMAND 1
    // parsing json file
    const data = commandGetDataFromJSONfile(localPathJSON);
    checkResultScenario(data, 'Err path or data JSON file');

    // COMMAND 2
    // create path save
    const dataPathSave = commandCreatePathSaveForCards(localFolderSave);
    checkResultScenario(dataPathSave, 'Not create path');

    // COMMAND 3
    // create listCards
    const lists = commandCreateListCards(data, factoryCard);
    checkResultScenario(lists, 'Not create lists');

    return lists;
}