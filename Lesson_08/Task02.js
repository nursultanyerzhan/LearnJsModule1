'use strict';

const getRandomInRange = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}

const generateArrayNumsInRange = (arrayLength, n, m) => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        array.push(getRandomInRange(n, m));
    }
    return array;
}

