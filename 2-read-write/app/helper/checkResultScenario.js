import { exitScenario } from './exitScenario.js'
export const checkResultScenario = (result, mess) => {
    if (!result) {
        exitScenario(mess);
    }
}