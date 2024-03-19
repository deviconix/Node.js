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

module.exports = rndNum