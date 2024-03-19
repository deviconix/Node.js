const { rndNum, rndText, rndNumArr } = require('./rnd');

const MIN = 1, MAX = 100;
console.log('1. Funkcję generującą losową liczbę całkowitą z wybranego przedziału - minimalna i maksymalna wartość przedziału ma być przekazywana jako parametry przy wywołaniu funkcji');;
console.log("\n", `min=${MIN} max=${MAX}`);
console.log(rndNum(MIN, MAX));

const MIN_2 = 8;
const MAX_2 = 18;
console.log("\n", '2. Funkcję generującą losowy ciąg znaków alfanumerycznych (małe litery, wielkie litery, cyfry) - jako parametr funkcji należy podać ilość znaków z jakiego ma się składać wygenerowany napis');
console.log(`min=${MIN_2} max=${MAX_2}`);
console.log(rndText(rndNum(MIN_2, MAX_2)));


const MIN_3 = 10;
const MAX_3 = 1000;
const LENGTH_ARR = 10;

console.log("\n", '3. Funkcję generującą tablicę losowych liczb całkowitych - minimalna i maksymalna wartość przedziału z jakiego mają być liczby oraz długość tablicy mają być przekazywane jako parametry przy wywołaniu funkcji');
console.log(`min=${MIN_3} max=${MAX_3} lengthArr=${LENGTH_ARR}`);
console.log(rndNumArr(MIN_3, MAX_3, LENGTH_ARR));