function rndNum(min, max) {
    // проверку при max<min 


    //console.log('start - rndNum(min, max)', min, max);
    let result = Math.random() * (max - min + 1);
    result = Math.floor(result + min);
    // debugger
    if (result > max || result < min) {
        console.log('err', result, 'min=' + min, 'max=' + max);
    }
    //console.log('end - rndNum(min, max)');
    return result;
}

function rndText(n) {
    console.log('---------------------------');
    const SEQUENCE_NUM = '0123456789';
    const SEQUENCE_LITERY_SMALL = 'qwertyuiopasdfghjklzxcvbnm';
    const SEQUENCE_LITERY_BIG = 'QWERTYUIOPASDFGHJKLZXCVBNM';

    const MAIN_SEQUENCE = SEQUENCE_NUM + SEQUENCE_LITERY_SMALL + SEQUENCE_LITERY_BIG;

    // console.log(MAIN_SEQUENCE);

    const mainSequences = MAIN_SEQUENCE.split('');

    //console.log(mainSequences.length);

    const MAIN_SEQUENCE_LENGTH = mainSequences.length;

    let result = '';
    let count = 0;

    for (let i = 0; i < n; i++) {
        count = rndNum(0, MAIN_SEQUENCE_LENGTH - 1);
        result += mainSequences[count];
    }

    // console.log(result.length, result)

    return result;
}

function rndNumArr(min, max, n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const num = rndNum(min, max);
        result.push(num);
    }

    return result;
}

module.exports = { rndNum, rndText, rndNumArr }