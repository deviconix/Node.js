function rndText(n) {
    //console.log('---------------------------');
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
    const rndNum = require('./rndNum');
    for (let i = 0; i < n; i++) {
        count = rndNum(0, MAIN_SEQUENCE_LENGTH - 1);
        result += mainSequences[count];
    }

    // console.log(result.length, result)

    return result;
}
module.exports = rndText