console.log('RUN !');

function rndNum(min, max) {
    const CORRECT_ROUND = 0.5;
    let result = Math.random() * max + 1;
    result = Math.round(result - min + CORRECT_ROUND);
    // debugger
    if (result > max || result < min) {
        console.log('err', result);
    }
    return result;
}

const min = 1, max = 100;
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
console.log(rndNum(min, max));
