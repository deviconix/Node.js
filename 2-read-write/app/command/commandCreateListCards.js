
import { createEmitterArr } from '../../libs/emmiter/createEmitterArr.js'

export const commandCreateListCards = (arr, factory) => {
    const lists = createEmitterArr(arr, factory);
    return lists;
}