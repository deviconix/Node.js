import { Card } from '../../domain/Card.js';

export const factoryCard = (dataObj, pathSave, fRewrite) => {
    const result = new Card(dataObj, pathSave, fRewrite);
    return result;
}