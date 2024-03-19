const { rndNum, rndText, rndNumArr } = require('./rnd');

const min = 1, max = 100;
console.log(rndNum(min, max));

const MIN_2 = 8;
const MAX_2 = 18;
console.log(rndText(rndNum(MIN_2, MAX_2)));


const MIN_3 = 10;
const MAX_3 = 1000;
const LENGTH_ARR = 10;
console.log(rndNumArr(MIN_3, MAX_3, LENGTH_ARR));