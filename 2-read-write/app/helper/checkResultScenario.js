import { exitScenario } from './exitScenario.js';


export const checkResultScenario = (result, err_mess) => {
    if (!result) {
        exitScenario(err_mess);
    }
}