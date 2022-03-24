'use strict';

const getAverageValue = array_ => {
    let totalCash = 0;
    for (let i = 0; i < array_.length; i++) {
        totalCash += array_[i];
    }
    return Math.floor(totalCash / array_.length);
}

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allСashbox));