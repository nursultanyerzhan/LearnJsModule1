'use strict';

const generateArrayNums = arrayLength => {
    const array = [];
    for(let i = 0; i < arrayLength; i++) {
        array.push(Math.round(Math.random()*100));
    }
    return array;
}

// console.log(generateArrayNums(20));
