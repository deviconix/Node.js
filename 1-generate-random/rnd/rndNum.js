function rndNum(min, max) {
    // проверку при max<min 
    if (min > max) {
        let tmp = max;
        max = min;
        min = tmp;
    }

    let result = Math.random() * (max - min + 1);
    result = Math.floor(result + min);
    // debugger
    if (result > max || result < min) {
        console.log('err', result, 'min=' + min, 'max=' + max);
    }

    return result;
}

module.exports = rndNum