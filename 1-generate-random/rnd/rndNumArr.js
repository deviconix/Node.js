const rndNum = require('./rndNum');

function rndNumArr(min, max, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const num = rndNum(min, max);
        result.push(num);
    }

    return result;
}

module.exports = rndNumArr