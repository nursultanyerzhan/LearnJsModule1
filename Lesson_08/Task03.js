'use strict';

const getRandomEvenInRange = (n, m) => {
    while (true) {
        const randomNumberInRange = getRandomInRange(n, m);
        if (!(randomNumberInRange % 2)) {
            return randomNumberInRange;
        }
    }
}
const getRandomOddInRange = (n, m) => {
    while (true) {
        const randomNumberInRange = getRandomInRange(n, m);
        if (randomNumberInRange % 2)
            return randomNumberInRange;
    }
}

const generateArrayNumsInRangeEvenORodd = (arrayLength, n, m, evenORodd) => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
        if (evenORodd === 'even')
            array.push(getRandomEvenInRange(n, m));
        else if ('odd')
            array.push(getRandomOddInRange(n, m));
        else array.push(getRandomInRange(n, m));
    }
    return array;
}

// console.log(generateArrayNumsInRangeEvenORodd(10,2, 100, 'odd'));
