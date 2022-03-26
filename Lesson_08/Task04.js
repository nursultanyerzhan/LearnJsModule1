'use strict';

const isYearLeap = year => 
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

const getLeapYearInRange = (n, m) => {
    let i = n;
    let j = m;

    if (n > m) {
        i = m;
        j = n;
    }
    
    let leapYears = [];

    for(; i <= j; i++) {
        if (isYearLeap(i)) 
            leapYears.push(i);
    }

    return leapYears;
}


// console.log(getLeapYearInRange(-1000,-2000));