'use strict';

const getMinimum = (x, y) => {
    return x * Math.floor(y/x) + y * Math.floor(x/y);
}

console.log(getMinimum(5, 17));