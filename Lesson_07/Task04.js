'use strict';

const getMidleCashboxes = cashboxes => {
    const midCashboxes = [];
    for (let i = 0; i < cashboxes.length; i++) {
        const cashbox = cashboxes[i];
        midCashboxes[i] = Math.round(cashbox[1] / cashbox[0]);
    }
    return midCashboxes;
}

const allСashbox_ = [
    [12, 4500], 
    [7, 3210], 
    [4, 650], 
    [3, 1250], 
    [9, 7830], 
    [1, 990], 
    [6, 13900], 
    [1, 370]
  ];

console.log(getMidleCashboxes(allСashbox_));